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
		//pageTitle = cf.getPageTitle();
		cf.expectURLtocontain("dashboard");
		//expect(pageTitle).toContain("Spectrum OnDemand");

		//cf.expecPageTitle("Spectrum OnDemand");
		logger.info("Login to the application - IT BLOCK.");
	});


	it('It should navigate to Accounts tab.', function(){
			
		accCreationPage.navigateToAccountsTab();
		logger.info("It should navigate to Accounts tab. - IT BLOCK.");
	});
	
	it('It should Click create Parent Account button.', function(){
			
		accCreationPage.clickCreateParentAcc();
		logger.info("It should Click create Parent Account button. - IT BLOCK.");
	});

	it('It should fill User Information Form.', function(){

		accCreationPage.setUserInfo(data.accData.accountName,data.accData.password,data.accData.userType,data.accData.fName,data.accData.lName,data.accData.email)
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
		expect(accCreationPage.createParentAccButtonExists()).toBeTruthy();
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
			logger.info('DB output result - '+rows[0].email);
			expect(data.accData.email).toContain(rows[0].email);
			
		});

		logger.info("Validate created account in RDS-DB - IT BLOCK.");
	});


	it('It should logout from the portal.', function(){

		actionFlag = accCreationPage.logout();
		
		expect(actionFlag).toBeTruthy();
		logger.info("It should logout from the portal. - IT BLOCK.");

	});

	//var devPortal = require('../pages/DevPortalLoginPage.js');
	
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
