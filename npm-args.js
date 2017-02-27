'use strict';

// selenium loglevel: default = silent, verbose for log all to console
exports.smlog = process.env.npm_config_smlog || 'silent';

// selenium server url: localhost for selenium-standalone
exports.selenium = process.env.npm_config_selenium || 'localhost';
