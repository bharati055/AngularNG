var config = require('./base.conf.js');

config.multiCapabilities = [{
  browserName: 'chrome',
  shardTestFiles: true,
  maxInstances: 1 
}];

module.exports = config;