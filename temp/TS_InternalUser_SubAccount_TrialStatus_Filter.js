var cf = require('../utils/commonFunctions.js');
var dbFunc = require('../utils/dbFunctions.js');
var accCreationPage = require('../pages/AccountCreationPage.js');
var accMainPage = require('../pages/AccountMainPage.js');
var addContactPage = require('../pages/AddContactPage.js');
var addCompanyPage = require('../pages/AddCompanyPage.js');
var env = require('../test_data/envData.json');
var data = require('../test_data/testData.json');
var logger = require('../utils/log.js');
var loginPage = require('../pages/LoginPage.js');

describe('Validate Account Creation-', function () {

	beforeEach(function () {
		browser.ignoreSynchronization = false;

	});

	it('Launch Application.', function(){
		
		cf.navigateToURL();	
		
	});

	it('Login to the application.', function(){
		loginPage.login_internalUser();
		
		//cf.expectURLtocontain("dashboard");
		logger.info("Login to the application - IT BLOCK.");
	});

	it('It should navigate to Accounts tab.', function () {

		accCreationPage.navigateToAccountsTab();
		//logger.info("It should navigate to Accounts tab. - IT BLOCK.");
	});
	

	it('Selecting the Trial Status "N" filter and validating the results.', function () {

		accMainPage.ele_ActiveTrial_Link_fn().click();
		accMainPage.ele_NoTrial_checkBox_fn().click();
		accMainPage.ele_ApplyButton_fn().click();
		browser.sleep(10000);
	    expect(accMainPage.ele_table_trialStatusColumn_fn().getText()).toEqual("N");

	});

	it('Selecting the Trial Status "Y" filter and validating the results.', function () {

		accMainPage.ele_NoTrial_checkBox_fn().click();
		accMainPage.ele_YesTrial_checkBox_fn().click();
		accMainPage.ele_ApplyButton_fn().click();
		browser.sleep(10000);
	    expect(accMainPage.ele_table_trialStatusColumn_fn().getText()).toEqual("Y");

	});

	
});