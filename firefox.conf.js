var config = require('./base.conf.js');

config.multiCapabilities = [{
  browserName: 'firefox',
  shardTestFiles: true,
  maxInstances: 1 
}];

module.exports = config;