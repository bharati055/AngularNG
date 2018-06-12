var cf = require('../utils/commonFunctions.js');
var dbFunc = require('../utils/dbFunctions.js');
var dbConn = require('../utils/dbConnection.js');
var accCreationPage = require('../pages/AccountCreationPage.js');
var addContactPage = require('../pages/AddContactPage.js');
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
		browser.sleep(7000);
		//logger.info("It should navigate to Accounts tab. - IT BLOCK.");
	});
	
	it('It should Click create Parent Account button.', function(){
			
		accCreationPage.ele_createParentAcc_fn().click();
        browser.sleep(5000);
		logger.info("It should Click create Parent Account button. - IT BLOCK.");
	});

	// it('It should fill User Information Form.', function(){

	// 	accCreationPage.setUserInfo(data.accData.accountName,data.accData.password,data.accData.userType,data.accData.fName,data.accData.lName,data.accData.email)
	// 	logger.info("It should fill User Information Form. - IT BLOCK.");
	// 	browser.sleep(10000);
	// });

	it('It should fill Company Info Form.', function(){

		accCreationPage.ele_companyName_fn().sendKeys('pitney');
        browser.sleep(3000);    
        accCreationPage.ele_companyName_autoselect().click();  
        browser.sleep(3000);   
        // accCreationPage.setcompanyInfo(data.accData.custom_companyName)
        // browser.sleep(5000);
        // accCreationPage.ele_companyName_autoselect().click();
        // browser.sleep(5000);
	});

    it('It should open up the New Contact Information Form.', function(){

		accCreationPage.ele_contactName_enterContactName();
        browser.sleep(5000);    
        accCreationPage.ele_addNew_Link_click();
        browser.sleep(5000);    

	});

    it('Enter the New Contact Information .', function(){

		addContactPage.ele_contactTitle().click();
        browser.sleep(3000);    
		addContactPage.enter_ContactInformation();
		browser.sleep(3000);    
		addContactPage.ele_contactSaveButton().click();
        browser.sleep(4000);    


        	});

	    it('Validating the Contact details .', function(){
			var data = require('../test_data/testData.json');
			//Validating the title
			expect(accCreationPage.ele_contactTitle().getAttribute('value')).toEqual(data.contactInfo_admin.contactTitle);
			//Validating the Name
			expect(accCreationPage.ele_contactName().getAttribute('value')).toEqual(data.contactInfo_admin.contactName);
		   //Validating the Email
			expect(accCreationPage.ele_contactEmail().getAttribute('value')).toEqual(data.contactInfo_admin.contactEmail);
		   //Validating the Phone Number 
			expect(accCreationPage.ele_contactPhNo().getAttribute('value')).toEqual(data.contactInfo_admin.contactPhoneNumber);
			//Validating the Address
			expect(accCreationPage.ele_contactAddLine1().getAttribute('value')).toEqual(data.contactInfo_admin.contactAddLine1);
			//Validating the City
			expect(accCreationPage.ele_contactCity().getAttribute('value')).toEqual(data.contactInfo_admin.contactCity);
			//Validating the State
			expect(accCreationPage.ele_contactState().getAttribute('value')).toEqual(data.contactInfo_admin.contactState);
			//Validating the Zip
			expect(accCreationPage.ele_contactZip().getAttribute('value')).toEqual(data.contactInfo_admin.contactZipCode);
		
		});

	// 	it('DB entry for the Contact details should be created', function(){
		
	// 	var queryRes = null;

	// 	// var queryString = "SELECT * from scpdbTest.company where name = '"+data.companyInfo_eu.companyName+"'"
	// 	// console.log(queryString);
	// 	browser.sleep(5000);
	// 	var deletequeryString = "DELETE from scpdbTest.contact where name = '"+data.contactInfo_admin.contactName+"'"
	// 	console.log(deletequeryString)


	// 	dbConn.query(deletequeryString,
	// 	function(err, rows) 
	// 	{
	// 		if(err) throw err;
	// 		//logger.info('Inside query func');
	// 		//logger.info('DB output result - '+rows[0].email);
	// 		//expect(data.accData.name).toContain(rows[0].email);
			
	// 	});

	// 	//logger.info("Validate created account in RDS-DB - IT BLOCK.");
	// });


	});







	

