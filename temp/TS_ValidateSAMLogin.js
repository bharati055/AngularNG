describe('Siebel Open UI - Account creation and DNS Validation', function(){
	
	var comFunc = require('../utils/commonFunctions.js');
	var loginPage = require('../pages/LoginPage.js');
	var env = require('../test_data/envData.json');	

	beforeEach(function() {
	       browser.ignoreSynchronization = true;
	});
	
	   
	   it('Launch the SAM application.', function(){
			
		    comFunc.navigateToURL(env.sam_url);
			var pageTitle = comFunc.getPageTitle();
			expect(pageTitle).toContain("Login");
			
			console.log("Launch the SAM application - DONE.");
		});


		 it('Login to SAM application.', function(){
			
		    loginPage.login(env.sam_loginID,env.sam_password);	
			var pageTitle = comFunc.getPageTitle();
			expect(pageTitle).toContain("SAM");
			
			console.log("Login to SAM application - DONE.");
		});
	 
	
});