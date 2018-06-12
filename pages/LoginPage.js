var LoginPage = function(){

	
	var logger=require('../utils/log.js');
	var cf=require('../utils/commonFunctions.js');
	var env=require('../test_data/envData.json');

	//objects==================================================================================================
	var txt_userName = element(by.name("username"));
	var txt_password = element(by.name("password"));
	var btn_signIn = element(by.xpath("//button[contains(text(),'Sign in')]"));
	
	
	//methods===================================================================================================
	
	this.login = function(environment){

		if(environment === 'spectrumfcc'){
			varUserID = env.qa.spectrumfcc.loginID
			varPassword = env.qa.spectrumfcc.password
		}
		if(environment === 'spectrumfcc1'){
			varUserID = env.qa.spectrumfcc1.loginID
			varPassword = env.qa.spectrumfcc1.password
		}
		if(environment === 'fccperf4'){
			varUserID = env.qa.fccperf4.loginID
			varPassword = env.qa.fccperf4.password
		}

	
		cf.fnSendKeys(txt_userName,varUserID);
		cf.fnSendKeys(txt_password,varPassword);
		cf.fnClick(btn_signIn);
        		
		browser.sleep(3000);
	};
	

};

module.exports = new LoginPage();