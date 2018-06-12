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
		
		cf.navigateToURL(env.spodApp.qa_eu.url);	
		loginPage.waitForLoginPage();
		
		var pageTitle = cf.getPageTitle().then(function(result){
			cf.expecttocontain(result,"Spectrum OnDemand");
		});

		logger.info("Launch app - IT BLOCK.");
	});

	it('Login to the application.', function(){
		loginPage.login(env.spodApp.qa_eu.loginID,env.spodApp.qa_eu.password);
		pageTitle = cf.getPageTitle();
		
		var pageTitle = cf.getPageTitle().then(function(result){
			cf.expecttocontain(result,"Spectrum OnDemand");
		});
		logger.info("Login to the application - IT BLOCK.");
	});


	it('It should navigate to Accounts tab.', function(){
			
		accCreationPage.navigateToAccountsTab();
		logger.info("It should navigate to Accounts tab. - IT BLOCK.");
	});
	
	it('It should Click create Parent Account button.', function(){
			
		accCreationPage.clickCreateSubAcc();
		logger.info("It should Click create Parent Account button. - IT BLOCK.");
	});

	it('It should fill User Information Form.', function(){

		accCreationPage.setUserInfo(data.accData_eu.accountName,data.accData_eu.password,data.accData_eu.userType,data.accData_eu.fName,data.accData_eu.lName,data.accData_eu.email)
		logger.info("It should fill User Information Form. - IT BLOCK.");
	});

	it('It should fill Company Info Form.', function(){

		accCreationPage.setcompanyInfo(data.accData.companyName)
		logger.info("It should fill Company Info Form. - IT BLOCK.");
	});

	it('It should fill Contact Information Form.', function(){

		accCreationPage.setcontactInfo(data.accData.contactName)
		logger.info("It should fill Contact Information Form. - IT BLOCK.");
	});

	it('It should save the Form.', function(){

		accCreationPage.clickSave();
		browser.sleep(3000);
		//var message = accCreationPage.getMessage();
		//expect(message).toContain('Account created successfully');
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
			//expect(data.accData.email).toEqual(rows[0].email);
			cf.expecttocontain(rows[0].email,data.accData.email);
			logger.info('Sample DB output result - '+rows[0].email);
		});

		logger.info("Validate created account in RDS-DB - IT BLOCK.");
	});

	var devPortal = require('../pages/DevPortalLoginPage.js');
	
	// it('Launch Developer portal.', function(){

	// 	cf.navigateToURL(env.devPortal_url);
	// 	var pageTitle = cf.getPageTitle();
	// 	expect(pageTitle).toContain("Developer Hub");

	// });

	// it('Login to Developer portal with new Account.', function(){

	// 	devPortal.login(data.accData.email,data.accData.password);
	// 	var pageTitle = cf.getPageTitle();
	// 	expect(pageTitle).toContain("Shipping APIs");

	// });




});
