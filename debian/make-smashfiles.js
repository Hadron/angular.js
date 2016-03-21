var angularFiles = require('../angularFiles').files;
var fs = require('fs');

function smashlist(mn, files) {
    var s = '';
    if (! mn.match('ngSanitize|ngTouch|ngRoute|angularLoader|angularSrc')) {
	s += 'import "src/module.prefix";\n';
    }
    for (var fn of files) {
	s += 'import "' + fn + '";\n';
    }
    if (! mn.match('angularSrc')) {
	s += 'import "src/module.suffix";\n';
    }
    return s;
}

function makesmash(fn, files) {
    var s = smashlist(fn, files);
    fs.writeFile('debian/' + 'smash-' + fn + '.js', s);
}

makesmash('angularSrc', angularFiles['angularSrc']);
makesmash('angularLoader', angularFiles['angularLoader']);

for (var k of Object.keys(angularFiles['angularModules'])) {
    var files = angularFiles['angularModules'][k];
    makesmash(k, files);
}
