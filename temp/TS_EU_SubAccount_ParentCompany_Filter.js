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
		//loginPage.waitForLoginPage();
		//pageTitle = cf.getPageTitle();
		//expect(pageTitle).toContain("Spectrum On Demand");
		//cf.expecPageTitle("Spectrum OnDemand");

		//logger.info("Launch app - IT BLOCK.");
	});

	it('Login to the application.', function(){
		loginPage.login_eu();
		
		//cf.expectURLtocontain("dashboard");
		logger.info("Login to the application - IT BLOCK.");
	});

	it('It should navigate to Accounts tab.', function () {

		accCreationPage.navigateToAccountsTab();
		//logger.info("It should navigate to Accounts tab. - IT BLOCK.");
	});
	

	it('Entering the Parent company filter and validating the results.', function () {

		accMainPage.ele_ParentCo_Link_fn().click();
		accMainPage.ele_ParentCo_enterText_fn().sendKeys("Pitney Bowes");
		accMainPage.ele_ParentCo_dropDown_fn().click();
		accMainPage.ele_ApplyButton_fn().click();
		browser.sleep(10000);
	    expect(accMainPage.ele_table_companyNameColumn_fn().getText()).toEqual("Pitney Bowes");

	});

	

});