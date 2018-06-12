var log4js = require('log4js');
log4js.configure({
  appenders: [
    { type: 'file', filename: './logs/exec.log', append:"false"},
    { type: 'console' }
  ]
});


var logger = log4js.getLogger('Log');

module.exports = logger;