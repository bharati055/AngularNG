var cf = require('../utils/commonFunctions.js');
var dbFunc = require('../utils/dbFunctions.js');
var accCreationPage = require('../pages/AccountCreationPage.js');
var env = require('../test_data/envData.json');
var data = require('../test_data/testData.json');
var logger = require('../utils/log.js');
var loginPage = require('../pages/LoginPage.js');

describe('Validate Admin Account Creation-', function(){

	beforeEach(function() {
	       browser.ignoreSynchronization = false;

	});

	it('Launch Application.', function(){
		
		cf.navigateToURL_admin();	
		browser.sleep(7000);
		
	});

	it('Login to the application.', function(){
		loginPage.login_admin();
		browser.sleep(15000);
		
		logger.info("Login to the application - IT BLOCK.");
	});

	it('It should navigate to Accounts tab.', function () {

		accCreationPage.navigateToAccountsTab();
		browser.sleep(7000);
	});
	
	it('It should fill User and Account Information Form.', function(){

		accCreationPage.ele_createParentAcc_fn().click();
		browser.sleep(5000);
		accCreationPage.addUserAccountInfo();
		logger.info("The AccName is:" + data.accData.accountName);
		logger.info("It should fill User Information Form. - IT BLOCK.");
		browser.sleep(2000);
	});

	
	it('It should fill Company Info Form.', function(){

		accCreationPage.ele_companyName_fn().sendKeys('pitney');
        browser.sleep(4000);    
        accCreationPage.ele_companyName_autoselect().click();  
        browser.sleep(5000);  
	});

	it('It should fill Contact Information Form.', function(){

		accCreationPage.setcontactInfo(data.accData.contactName)
		logger.info("It should fill Contact Information Form. - IT BLOCK.");
	});

	it('It should save the Form.', function(){

		accCreationPage.clickSave();
		browser.sleep(7000);
		expect(accCreationPage.createParentAccButtonExists()).toBeTruthy();
		logger.info("It should save the Form. - IT BLOCK.");

	});



	var dbConn = require('../utils/dbConnection.js');
	it('DB entry for the account should be created', function(){
		var queryRes = null;


		var queryString = "SELECT * from scpdbTest.account where name = '"+data.accData.accountName+"'"
		logger.info(queryString)
		dbConn.query(queryString,
		function(err, rows) {
			if(err) throw err;
			logger.info('Inside query func');
			logger.info('DB output result - '+rows[0].email);
			expect(data.accData.email).toContain(rows[0].email);
			
		});

		browser.sleep(5000);
		logger.info("Validate created account in RDS-DB - IT BLOCK.");
	});

	it('Logging Out and logging in with the Admin user which we just created', function(){

		accCreationPage.Logout();
		browser.sleep(5000);
		loginPage.admin_usernameInput_fn().sendKeys(data.accData.accountName);
		loginPage.admin_passwordInput_fn().sendKeys(env.spodApp.qa_admin.password);
        loginPage.admin_signinButton_fn().click();
		browser.sleep(15000);
		accCreationPage.navigateToAccountsTab();
		browser.sleep(15000);

		logger.info("Successfully Logged in to Admin portal with the new Admin user");

	});


	});
