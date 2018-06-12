var cf = require('../utils/commonFunctions.js');
var env = require('../test_data/envData.json');
var logger = require('../utils/log.js');
var loginPage = require('../pages/LoginPage.js');

describe('Login to FCC -', function(){

	beforeEach(function() {
	       browser.ignoreSynchronization = false;

	});

	it('Launch Application.', function(){
		
		cf.launchFCC("spectrumfcc1");	

		expect(cf.getURL()).toContain("login");
		logger.info("Launch application - IT BLOCK.");		
	});

	it('Login to the application.', function(){
		loginPage.login("spectrumfcc1");
		
		expect(cf.getURL()).toContain("home");
		logger.info("Login to application - IT BLOCK.");
	});

	

});
