var cf = require('../utils/commonFunctions.js');
var dbFunc = require('../utils/dbFunctions.js');
var accCreationPage = require('../pages/AccountCreationPage.js');
var env = require('../test_data/envData.json');
var data = require('../test_data/testData.json');
var logger = require('../utils/log.js');
var loginPage = require('../pages/LoginPage.js');

describe('Validate Account Creation-', function(){

	beforeEach(function() {
	       browser.ignoreSynchronization = false;

	});

	it('Launch Application.', function(){
		
		cf.navigateToURL(env.spodApp.qa_admin.url);	
		loginPage.waitForLoginPage();
		pageTitle = cf.getPageTitle();
		expect(pageTitle).toContain("Spectrum OnDemand");
		//cf.expecPageTitle("Spectrum OnDemand");

		logger.info("Launch app - IT BLOCK.");
	});

	it('Login to the application.', function(){
		loginPage.login_admin(env.spodApp.qa_admin.loginID,env.spodApp.qa_admin.password);
		
		cf.expectURLtocontain("dashboard");
		logger.info("Login to the application - IT BLOCK.");
	});



	it('It should logout from the portal.', function(){

		actionFlag = accCreationPage.logout();
		
		expect(actionFlag).toBeTruthy();
		logger.info("It should logout from the portal. - IT BLOCK.");

	});

});
