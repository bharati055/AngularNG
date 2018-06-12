var cf = require('../utils/commonFunctions.js');
var dbFunc = require('../utils/dbFunctions.js');
var dbConn = require('../utils/dbConnection.js');
var accCreationPage = require('../pages/AccountCreationPage.js');
var addContactPage = require('../pages/AddContactPage.js');
var addCompanyPage = require('../pages/AddCompanyPage.js');
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
		browser.sleep(15000);
		
	});

	it('Login to the application.', function(){
		loginPage.login_admin();
		browser.sleep(15000);
		
		//cf.expectURLtocontain("dashboard");
		logger.info("Login to the application - IT BLOCK.");
	});

	it('It should navigate to Accounts tab.', function () {

		accCreationPage.navigateToAccountsTab();
		browser.sleep(15000);
		//logger.info("It should navigate to Accounts tab. - IT BLOCK.");
	});
	
	// it('It should fill User Information Form.', function(){

	// 	accCreationPage.ele_createParentAcc_fn().click();
	// 	accCreationPage.setUserInfo(data.accData.accountName,data.accData.password,data.accData.userType,data.accData.fName,data.accData.lName,data.accData.email)
	// 	logger.info("It should fill User Information Form. - IT BLOCK.");
	// 	browser.sleep(10000);
	// });

	it('It should fill New Company Information Form.', function(){

		accCreationPage.ele_createParentAcc_fn().click();
		browser.sleep(7000);
		accCreationPage.ele_companyName_fn().sendKeys('jnjnknn');
		browser.sleep(3000);
		accCreationPage.ele_company_addNew_Link().click();
		browser.sleep(4000);
		addCompanyPage.enter_CoInformation();
		browser.sleep(4000);
		addCompanyPage.ele_addCompany_coSaveButton_fn().click();
		browser.sleep(7000);

	});

	it('Validating the New Company Information on the Account page .', function(){
		
		expect(accCreationPage.ele_companyName_fn().getAttribute('value')).toEqual(data.companyInfo_eu.companyName);
		browser.sleep(15000);
		expect(accCreationPage.ele_companyURL_fn().getAttribute('value')).toEqual(data.companyInfo_eu.companyURL);
		expect(accCreationPage.ele_companyAlias_fn().getAttribute('value')).toEqual(data.companyInfo_eu.companyAlias);
		expect(accCreationPage.ele_companyParentName_fn().getAttribute('value')).toEqual(data.companyInfo_eu.companyParentName);

	

	});

	it('DB entry for the account should be created', function(){
		
		var queryRes = null;

		// var queryString = "SELECT * from scpdbTest.company where name = '"+data.companyInfo_eu.companyName+"'"
		// console.log(queryString);
		browser.sleep(5000);
		var deletequeryString = "DELETE from scpdbTest.company where name = '"+data.companyInfo_eu.companyName+"'"
		console.log(deletequeryString)


		dbConn.query(deletequeryString,
		function(err, rows) 
		{
			if(err) throw err;
			//logger.info('Inside query func');
			//logger.info('DB output result - '+rows[0].email);
			//expect(data.accData.name).toContain(rows[0].email);
			
		});

		//logger.info("Validate created account in RDS-DB - IT BLOCK.");
	});

});