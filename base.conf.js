
exports.config = {
  // The address of a running selenium server.
  //directConnect: true, 
  seleniumAddress: 'http://localhost:4444/wd/hub',

  seleniumArgs: [
    '-Dwebdriver.ie.driver=node_modules/protractor/selenium/IEDriverServer.exe',
    '-Dwebdriver.chrome.logfile=/logs/chromedriver.log',
    '-Dwebdriver.firefox.logfile=/logs/firefoxdriver.log',
  ],

//    multiCapabilities: [{
//    browserName: 'chrome',
//   //  browserName: 'firefox'
//       shardTestFiles: true,
//       maxInstances: 1 
//  }],

  framework: 'jasmine2', 

  params: {
    login: {
      user: 'admin',
      password: 'admin' 
    }
  },

  allScriptsTimeout: 120000,
  getPageTimeout: 180000,
  maxSessions: 1,

  // specs: [
  //    './drivers/Dev_DriverScript_Smoke.js',
  //   // './test_spec/TS_EU_Login_Logout.js',
  //   // './test_spec/TS_Admin_AccountCreation_DBValidation.js'
    
  // ],

  suites: {
      smoke: [
         './test_spec/TC01_Login_validateLandingPage.js'                           
      ],
      regression: [
        // './test_spec/TC01_Admin_AccountCreation_DBValidation.js',
        // './test_spec/TC05_Admin_EndUserAccountCreation_DBValidation.js',
        // './test_spec/TC09_Admin_InternalUserAccountCreation_DBValidation.js',

      ]  
  },

  
  jasmineNodeOpts: {
   isVerbose: false,
   showColors: true,
   includeStackTrace: false,
   defaultTimeoutInterval: 40000,
   print: function() {}
  },

  onPrepare:function() {
	
      browser.manage().timeouts().implicitlyWait(60000);
      browser.ignoreSynchronization = false;
      browser.driver.getCapabilities().then(function(caps)
      {
          browser.browserName = caps.get('browserName');
      });

      process.on('uncaughtException', function () {
          reporter.jasmineDone();
          reporter.afterLaunch();
			});

      // var JSONReporter = require('jasmine-json-test-reporter');
      // jasmine.getEnv().addReporter(new JSONReporter({
      //     file: 'jasmine-test-results.json',
      //     beautify: false,
      //     indentationLevel: 4 // used if beautify === true 
      // }));

      var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'target',
          cleanDestination: true,
          showSummary: false,
          showConfiguration: false,
          reportTitle: "SPOD Automation Report"
        })
      );
//====================================================================================================

      // var myReporter = require('./utils/myReporter.js')
      // jasmine.getEnv().addReporter(myReporter);

      //     //If you look at the console output for this page, you should see the output from this reporter

      //   //   describe('Top Level suite', function() {
      //   //   it('spec', function() {
      //   //       expect(1).toBe(1);
      //   //   });

      //   //   describe('Nested suite', function() {
      //   //       it('nested spec', function() {
      //   //       expect(true).toBe(true);
      //   //       });
      //   // });
      // //});


      // var jasmineReporters = require('jasmine-reporters');
      // jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      //     consolidateAll: true,
      //     savePath: 'temp',
      //     filePrefix: 'xmloutput'
      // }));

      // const ProtractorBootstrapReporter  = require('protractor-bootstrap-reporter');
      // jasmine.getEnv().addReporter(new ProtractorBootstrapReporter({
      //     path: 'assets/report'
      // }));
      // browser.driver.manage().window().setSize(960, 600);


      // var HtmlReporter = require('protractor-angular-screenshot-reporter');
      // jasmine.getEnv().addReporter(new HtmlReporter({
      //    baseDirectory: '/temp/screenshots'
      // }).getJasmine2Reporter());
      // var reporter = new HtmlReporter({
      //   baseDirectory: '/temp/screenshots',
      //   docTitle: 'my reporter',
      //   docName: 'index.html'
      // });

//====================================================================================================
     
  },
 
  //OnComplete
  onComplete: function () {
      //browser.close();
       //allure_report();
      // var autoDB = require('./utils/automationdb.js');
       //autoDB.insertResultToDB();

       send_mail();
  },

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    onComplete: null,
    // If true, display spec names.
    isVerbose: false,
    // If true, print colors to the terminal.
    showColors: true,
    // If true, include stack traces in failures.
    includeStackTrace: true,
    // Default time to wait in ms before a test fails.
    defaultTimeoutInterval: 120000
  }
};

function send_mail() {
  var emailObj = require('./utils/sendEmail');
  // var q = require('q');

  // return q.fcall(function()
  //  {
  //     emailObj.send("dev");
  //  }).delay(20000);


   emailObj.send("qa");

}
