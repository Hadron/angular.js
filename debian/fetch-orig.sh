#!/bin/sh

VERSION=1.3.17
URL=https://code.angularjs.org/$VERSION

wget $URL/angular.js
wget $URL/angular-animate.js
wget $URL/angular-aria.js
wget $URL/angular-cookies.js
wget $URL/angular-loader.js
wget $URL/angular-messages.js
wget $URL/angular-mocks.js
wget $URL/angular-resource.js
wget $URL/angular-route.js
wget $URL/angular-sanitize.js
wget $URL/angular-scenario.js
wget $URL/angular-touch.js

wget $URL/angular-csp.css

wget $URL/version.json
wget $URL/version.txt

wget $URL/errors.json
