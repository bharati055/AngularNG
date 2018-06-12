var DevPortalLoginPage = function(){

	var or=require('../test_data/ObjectRepo.json');
	
	var usernameInput =	element(by.id("username"));
	var passwordInput = element(by.id("password"));
	var loginButton =	element(by.id("signinButton"));
	
	this.login = function(userid,password){
		
		usernameInput.click();
		usernameInput.sendKeys(userid);
		passwordInput.click();
		passwordInput.sendKeys(password);
		loginButton.click();
		browser.sleep(3000);
	};
};

module.exports = new DevPortalLoginPage();