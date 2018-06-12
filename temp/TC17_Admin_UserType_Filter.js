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
		
		cf.navigateToURL_admin();	
		browser.sleep(15000);
		
	});

	it('Login to the application.', function(){
		loginPage.login_admin();
		
		//cf.expectURLtocontain("dashboard");
		logger.info("Login to the application - IT BLOCK.");
	});

	it('It should navigate to Accounts tab.', function () {

		accCreationPage.navigateToAccountsTab();
		//logger.info("It should navigate to Accounts tab. - IT BLOCK.");
	});
	

	it('Selecting the Admin UserType filter and validating the results.', function () {

		accMainPage.ele_UserType_Link_admin_fn().click();
		accMainPage.ele_AdminUserType_checkBox_admin_fn().click();
		accMainPage.ele_ApplyButton_fn().click();
		browser.sleep(10000);
	    expect(accMainPage.ele_table_UserTypeColumn_fn().getText()).toEqual("Admin");


			});

		it('Selecting the Internal UserType filter and validating the results.', function () {

		accMainPage.ele_AdminUserType_checkBox_admin_fn().click();
		accMainPage.ele_InternalUserType_checkBox_admin_fn().click();
		accMainPage.ele_ApplyButton_fn().click();
		browser.sleep(10000);
	    expect(accMainPage.ele_table_UserTypeColumn_fn().getText()).toEqual("Internal");

	});

	it('Selecting the EndUser UserType filter and validating the results.', function () {

		accMainPage.ele_InternalUserType_checkBox_admin_fn().click();
		accMainPage.ele_EndUserType_checkBox_admin_fn().click();
		accMainPage.ele_ApplyButton_fn().click();
		browser.sleep(10000);
	    expect(accMainPage.ele_table_UserTypeColumn_fn().getText()).toEqual("End User");

	});



	

});