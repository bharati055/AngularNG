var cf = require('../utils/commonFunctions.js');
var dbFunc = require('../utils/dbFunctions.js');
var accCreationPage = require('../pages/AccountCreationPage.js');
var accMainPage = require('../pages/AccountMainPage.js');
var env = require('../test_data/envData.json');
var data = require('../test_data/testData.json');
var logger = require('../utils/log.js');
var loginPage = require('../pages/LoginPage.js');

describe('Validate Account Creation-', function(){

	beforeEach(function() {
	       browser.ignoreSynchronization = false;

	});

	it('Launch Application.', function(){
		
		cf.navigateToURL_admin();	
		browser.sleep(7000);
		
	});

	it('Login to the application.', function(){
		loginPage.login_admin();
		//browser.sleep(15000);
		
		//cf.expectURLtocontain("dashboard");
		logger.info("Login to the application - IT BLOCK.");
	});

	it('It should navigate to Accounts tab.', function () {

		accCreationPage.navigateToAccountsTab();
		//browser.sleep(10000);
		//logger.info("It should navigate to Accounts tab. - IT BLOCK.");
	});

	it('Entering the Account Name filter and validating the results.', function () {

		accMainPage.ele_Account_Link_fn().click();
		browser.sleep(3000);
		logger.info(data.accData.accountName);
		accMainPage.ele_Account_enterText_fn().sendKeys(data.accData.accountName);
		//accMainPage.ele_ParentCo_dropDown_fn().click();
		accMainPage.ele_ApplyButton_fn().click();
		browser.sleep(10000);
	    expect(accMainPage.ele_table_accountNameColumn_fn().getText()).toEqual(data.accData.accountName);

	});

	it('Clicking the Suspend account link and suspend the account.', function () {

		accMainPage.ele_User_ExpandLink_admin_fn().click();
		browser.sleep(3000);
		//logger.info(data.accData.accountName);
		accMainPage.ele_User_suspendAccountLink_admin_fn().click();
		browser.sleep(3000);
		accMainPage.ele_continueButton_suspendAccountdialog_fn().click();
		browser.sleep(5000);
		logger.info("Successfully suspended!!");
		browser.sleep(7000);

	});
	
	
	it('validating the data on the screen.', function () {

		// accMainPage.ele_Account_Link_fn().click();
		// browser.sleep(3000);
		// logger.info(data.accData.accountName);
		// accMainPage.ele_Account_enterText_fn().sendKeys(data.accData.accountName);
		// //accMainPage.ele_ParentCo_dropDown_fn().click();
		// accMainPage.ele_ApplyButton_fn().click();
		logger.info("We reached!!")
		browser.sleep(50000);
	    expect(accMainPage.ele_table_accountNameColumn_fn().getText()).toEqual(data.accData.accountName);
		expect(accMainPage.ele_table_activeStatusColumn_fn().getText()).toEqual("Suspended");
		browser.sleep(5000);
		logger.info(data.accData.accountName);


	});
	

	// it('Validating the Updated data', function () {

    //     accMainPage.ele_Account_Link_fn().click();
	// 	browser.sleep(3000);
	// 	logger.info(data.accData.accountName);
	// 	accMainPage.ele_Account_enterText_fn().sendKeys(data.accData.accountName);
	// 	//accMainPage.ele_ParentCo_dropDown_fn().click();
	// 	accMainPage.ele_ApplyButton_fn().click();
	// 	browser.sleep(10000);
	//     expect(accMainPage.ele_table_accountNameColumn_fn().getText()).toEqual(data.accData.accountName);
	// 	accMainPage.ele_User_ExpandLink_admin_fn().click();
	// 	browser.sleep(3000);
	// 	//logger.info(data.accData.accountName);
	// 	accMainPage.ele_User_editAccountLink_admin_fn().click();
	// 	browser.sleep(7000);
	// 	accCreationPage.validate_Updated_AccountPageData();
	// 	logger.info("Successfully Validated!! the updated data");
	// 	browser.sleep(7000);

	// });


});
