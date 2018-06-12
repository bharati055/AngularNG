var AccountCreationPage = function(){

	var or=require('../test_data/ObjectRepo.json');
	var logger=require('../utils/log.js');
	var cf = require('../utils/commonFunctions.js');
	var SelectWrapper  = require('../utils/select-wrapper');
	var data = require('../test_data/testData.json');
	var env = require('../test_data/envData.json');

	//Page elements
	//div/div/div[2]/ul[1]/li[3]/a
	var ele_accountTab = element(by.xpath("//div/div/div[2]/ul[1]/li[3]/a"));
	//var ele_accountTab = element(by.xpath("//a[text()='Accounts']"));
	var ele_createParentAcc = element(by.xpath("//button[text()='Create Parent Account']"));
	//var ele_createParentAcc = element(by.xpath("//button[@ui-sref='account-mgr']"));
	var ele_createSubtAcc = element(by.xpath("//button[text()='Create Sub Account']"));

	//User Info Fields
	var ele_spodUserName =	element(by.name("account_name"));
	var ele_password = element(by.name("password"));
	var ele_description = element(by.xpath("//label[text()='Description']/../textarea"));
	var ele_internalUser = element(by.xpath("//label[text()='User type']/../select/option[1]"));
	var ele_endUser = element(by.xpath("//label[text()='User type']/../select/option[2]"));
	var ele_adminUser = element(by.xpath("//label[text()='User type']/../select/option[3]"));



	//var sel_userType_xpath = "//select[@ng-model='account.user_type']";
	//var sel_userType = element(by.xpath(sel_userType_xpath));
	//var ele_description = element(by.xpath("//input[@ng-model='account.description']"));
	//var ele_description = element(by.xpath("//label[text()='Description']/../input"));
	var ele_fname =	element(by.name("first_name"));
	var ele_lname =	element(by.name("last_name"));
	var ele_email =	element(by.name("email"));
	var ele_yesTrial = element(by.xpath("//label[text()='Trial']/../select/option[1]"));
	var ele_noTrial = element(by.xpath("//label[text()='Trial']/../select/option[2]"));


	//Message
	//var ele_description =	element(by.xpath("//div[contains(text(),'Account created successfully')]"));
	
	//Company Info Fields
	//var ele_companyName =	element(by.name("company_name"));
	//div[1]/div/form/div[5]/div[2]/div/input
	var ele_companyName = element(by.xpath("//div[1]/div/form/div[5]/div[2]/div/input[@name='company_name']"));
	var ele_companyURL = element(by.xpath("//div[1]/div/form/div[5]/div[3]/div/input"));
	var ele_companyAlias = element(by.xpath("//div[1]/div/form/div[6]/div[1]/div/input"));
	var ele_companyParentName = element(by.xpath("//div[1]/div/form/div[6]/div[2]/div/input"));

	var ele_company_addNew_Link = element(by.xpath("//div[1]/div/form/div[5]/div[2]/div/p[2]/a/span"));
	var ele_companyName_autoselect = element(by.xpath("//a[@title='Pitney Bowes']"));
	var ele_companyName_autoselect2 = element(by.xpath("//a[@title='pi2']"));

    //div[1]/div/form/div[5]/div[2]/div/ul/li[3]/a
    //div[1]/div/form/div[5]/div[2]/div/ul/li[1]/a[@title='pitney bowes']
	//div[1]/div/form/div[5]/div[2]/div/ul/li[1]/a[@title='pitney bowes']

	//Contact Info Fields
	var ele_contactName =	element(by.name("contact_name"));
	var ele_contactNameSugg =	element(by.xpath("//input[@name='company_name']/../ul[1]/li[1]/a"));
	var ele_addNew_Link = element(by.xpath("//div[1]/div/form/div[8]/div[2]/div/p[2]/a/span"));
	var ele_contactTitle = element(by.xpath("//div[1]/div/form/div[8]/div[1]/div/input"));
	//element(by.xpath("//div[1]/div/div/div[2]/form/div[1]/div[1]/div/select/option[2]"));
	var ele_contactName = element(by.xpath("//div[1]/div/form/div[8]/div[2]/div/input"));
	var ele_contactEmail = element(by.xpath("//div[1]/div/form/div[9]/div[1]/div/input"));
	var ele_contactPhNo = element(by.xpath("//div[1]/div/form/div[9]/div[2]/div/input"));
	var ele_contactAddLine1 = element(by.xpath("//div[1]/div/form/div[10]/div[1]/div/input"));
	var ele_contactCity = element(by.xpath("//div[1]/div/form/div[11]/div[1]/div/input"));
	var ele_contactState = element(by.xpath("//div[1]/div/form/div[11]/div[2]/div/input"));
	var ele_contactZip = element(by.xpath("//div[1]/div/form/div[11]/div[3]/div/input"));

	//save button
	var ele_saveButton =	element(by.xpath("//button[text()='Save']"));

	//Logout element
	var ele_LoggedInUserName =	element(by.xpath("//a[@class='dropdown-toggle face']"));
	var ele_userNameLink = element(by.xpath("//div/div/div[2]/ul[2]/li[2]/a"));
	//var ele_logoutLink = element(by.xpath(""))

	// //div/div/div[2]/ul[2]/li[2]/ul/li[2]/a
	var ele_logoutLink =	element(by.xpath("//a[@ng-click='signOut()']"));
    //Page operations================================================================================================= 

    
	this.ele_internalUser_fn = function () {
		return ele_internalUser;
	}

	this.ele_endUser_fn = function () {
		return ele_endUser;
	}
	
	this.ele_adminUser_fn = function () {
		return ele_adminUser;
	}
	
	 this.ele_spodUserName_fn = function () {
		return ele_spodUserName;
	}

	this.ele_password_fn = function () {
		return ele_password;
	}
	
	this.ele_description_fn = function () {
		return ele_description;
	}
	 	 
	 this.ele_yesTrial_fn = function () {
		return ele_yesTrial;
	}

	 this.ele_noTrial_fn = function () {
		return ele_noTrial;
	}
	
	this.ele_addNew_Link = function () {
		return ele_addNew_Link;
	}

	 this.ele_company_addNew_Link = function () {
		return ele_company_addNew_Link;
	}

	this.ele_contactName = function () {
		return ele_contactName;
	}

	this.ele_addNew_Link_click = function () {
		return ele_addNew_Link.click();
	}

	this.ele_contactTitle = function () {
		return ele_contactTitle;
	}

	this.ele_contactName = function () {
		return ele_contactName;
	}

	this.ele_contactEmail = function () {
		return ele_contactEmail;
	}

	this.ele_contactPhNo = function () {
		return ele_contactPhNo;
	}

	this.ele_contactAddLine1 = function () {
		return ele_contactAddLine1;
	}

	this.ele_contactCity = function () {
		return ele_contactCity;
	}

	this.ele_contactState = function () {
		return ele_contactState;
	}

	this.ele_contactZip = function () {
		return ele_contactZip;
	}

	this.ele_companyName_fn = function () {
		return ele_companyName;
	}

	this.ele_companyName_autoselect = function () {
		return ele_companyName_autoselect;
	}

	this.ele_contactName_enterContactName = function () {
		return ele_contactName.sendKeys('adfghjkyl');
	}

    this.ele_companyURL_fn = function () {
		return ele_companyURL;
	}

	this.ele_companyAlias_fn = function () {
		return ele_companyAlias;
	}

	this.ele_companyParentName_fn = function () {
		return ele_companyParentName;
	}
	
    this.ele_createParentAcc_fn = function () {
		return ele_createParentAcc;
	}

		 this.ele_createSubtAcc_fn = function () {
		return ele_createSubtAcc;
	}

	
	
	
	
	this.navigateToAccountsTab = function(){
		
		ele_accountTab.click();
		//cf.fnClick(ele_accountTab);
		browser.sleep(7000);
		//logger.info("navigateToAccountsTab >> START");

		//cf.expectURLtocontain("accounts");

	};

	this.createParentAccButtonExists = function(){
		return cf.elementExist(ele_createParentAcc);
		
	}

	this.clickCreateParentAcc = function(){
		cf.fnClick(ele_createParentAcc);
		cf.expectURLtocontain("account-mgr");
	}

	this.clickCreateSubAcc = function(){
		cf.fnClick(ele_createSubtAcc);
		cf.expectURLtocontain("account-mgr");
	}
this.setcontactInfo = function(contactName){
		
		ele_contactName.sendKeys(contactName);
		browser.sleep(1000);
		element(by.xpath("//li/a[@title='"+contactName+"']")).click();
		browser.sleep(2000);
		expect(true).toBeTruthy();
	};
	this.validateAccountPageData = function(){

		expect(ele_fname.getAttribute('value')).toEqual(data.accData.fName);
		expect(ele_lname.getAttribute('value')).toEqual(data.accData.lName);
		expect(ele_companyName.getAttribute('value')).toEqual(data.companyInfo_admin.companyName);
		expect(ele_companyURL.getAttribute('value')).toEqual(data.companyInfo_admin.companyURL);
		expect(ele_companyAlias.getAttribute('value')).toEqual(data.companyInfo_admin.companyAlias);
		expect(ele_companyParentName.getAttribute('value')).toEqual(data.companyInfo_admin.companyParentName);
		//expect(ele_description.getAttribute('value')).toEqual(data.accData.lName);
		expect(ele_description.getAttribute('value')).toEqual(data.accData.description);
		expect(ele_contactName.getAttribute('value')).toEqual(data.accData.contactName);
			
	}

	this.validate_Updated_AccountPageData = function(){

		expect(ele_fname.getAttribute('value')).toEqual(data.accData_admin_updated.fName);
		expect(ele_lname.getAttribute('value')).toEqual(data.accData_admin_updated.lName);
		expect(ele_companyName.getAttribute('value')).toEqual(data.companyInfo2_admin.companyName);
		expect(ele_companyURL.getAttribute('value')).toEqual(data.companyInfo2_admin.companyURL);
		expect(ele_companyAlias.getAttribute('value')).toEqual(data.companyInfo2_admin.companyAlias);
		expect(ele_companyParentName.getAttribute('value')).toEqual(data.companyInfo2_admin.companyParentName);
		//expect(ele_description.getAttribute('value')).toEqual(data.accData.lName);
		expect(ele_description.getAttribute('value')).toEqual(data.accData_admin_updated.description);
		expect(ele_contactName.getAttribute('value')).toEqual(data.accData_admin_updated.contactName);
			
	}

	this.Updating_AccountPageData = function(){

		ele_fname.clear();
		ele_fname.sendKeys(data.accData_admin_updated.fName);
		ele_lname.clear();
		ele_lname.sendKeys(data.accData_admin_updated.lName);
		ele_description.clear();
		ele_description.sendKeys(data.accData_admin_updated.description);
		ele_companyName.clear();
		ele_companyName.sendKeys(data.accData_admin_updated.companyName);
		ele_companyName_autoselect2.click();
		browser.sleep(4000);
		//setcontactInfo(data.accData_admin_updated.contactName);
	
				
	};

	this.setUserInfo = function(spodUserName,password,userType,fname,lname,email){

		var datetime = require('node-datetime');
		var dt = datetime.create();
		var fomratted = dt.format('m/d/Y H:M:S');

		fomratted = fomratted.replace('/', '');
		fomratted = fomratted.replace('/', '');
		fomratted = fomratted.replace(' ', '');
		fomratted = fomratted.replace(':', '');
		fomratted = fomratted.replace(':', '');
		spodUserName =spodUserName+fomratted;
		email =spodUserName+"@pb.com";
		data.accData.accountName = spodUserName;
		data.accData.email = email;
		//var timestamp = cf.getTimeStamp();
		//logger.info(fomratted);
		
		ele_spodUserName.sendKeys(spodUserName);
		browser.sleep(500);
		ele_password.sendKeys(password);
		//browser.sleep(500);
		//ele_description.sendKeys("Account created by Automation script.");
		
		// if (cf.elementEnabled(sel_userType)){
		// 	var mySelect1 = new SelectWrapper(by.xpath(sel_userType_xpath));
		// 	mySelect1.selectByValue(userType);
		// }
	
		browser.sleep(500);
		ele_fname.sendKeys(fname);
		browser.sleep(500);
		ele_lname.sendKeys(lname);
		browser.sleep(500);
		ele_email.sendKeys(email);
		browser.sleep(500);

		expect(true).toBeTruthy();

	};

	this.addUserAccountInfo = function(){

		var datetime = require('node-datetime');
		var dt = datetime.create();
		var fomratted = dt.format('m/d/Y H:M:S');
		var spodUserName = data.accData.accountName;
		var email;

		fomratted = fomratted.replace('/', '');
		fomratted = fomratted.replace('/', '');
		fomratted = fomratted.replace(' ', '');
		fomratted = fomratted.replace(':', '');
		fomratted = fomratted.replace(':', '');
		spodUserName = spodUserName+fomratted;
		email =spodUserName+"@pb.com";
		data.accData.accountName = spodUserName;
		data.accData.email = email;
		//var timestamp = cf.getTimeStamp();
		//logger.info(fomratted);

		//Enter Account Info
		ele_fname.sendKeys(data.accData.fName);
		browser.sleep(500);
		ele_lname.sendKeys(data.accData.lName);
		browser.sleep(500);
		ele_email.sendKeys(data.accData.email);
		browser.sleep(500);
		ele_yesTrial.click();
		browser.sleep(500);

	    //Enter User Info
		ele_spodUserName.sendKeys(data.accData.accountName);
		ele_adminUser.click();
		ele_password.sendKeys(data.accData.password);
		ele_description.sendKeys(data.accData.description);

		//browser.sleep(500);
		//ele_description.sendKeys("Account created by Automation script.");
		
		// if (cf.elementEnabled(sel_userType)){
		// 	var mySelect1 = new SelectWrapper(by.xpath(sel_userType_xpath));
		// 	mySelect1.selectByValue(userType);
		// }
	
		// browser.sleep(5000);
		

		// expect(true).toBeTruthy();

	};

	this.addUserAccountInfo_endUser = function(){

		var datetime = require('node-datetime');
		var dt = datetime.create();
		var fomratted = dt.format('m/d/Y H:M:S');
		var spodUserName = data.accData.accountName;
		var email;

		fomratted = fomratted.replace('/', '');
		fomratted = fomratted.replace('/', '');
		fomratted = fomratted.replace(' ', '');
		fomratted = fomratted.replace(':', '');
		fomratted = fomratted.replace(':', '');
		spodUserName = spodUserName+fomratted;
		email =spodUserName+"@pb.com";
		data.accData.accountName = spodUserName;
		data.accData.email = email;
		//var timestamp = cf.getTimeStamp();
		//logger.info(fomratted);

		//Enter Account Info
		ele_fname.sendKeys(data.accData.fName);
		browser.sleep(500);
		ele_lname.sendKeys(data.accData.lName);
		browser.sleep(500);
		ele_email.sendKeys(data.accData.email);
		browser.sleep(500);
		ele_yesTrial.click();
		browser.sleep(500);

	    //Enter User Info
		ele_spodUserName.sendKeys(data.accData.accountName);
		ele_endUser.click();
		ele_password.sendKeys(data.accData.password);
		ele_description.sendKeys(data.accData.description);

		//browser.sleep(500);
		//ele_description.sendKeys("Account created by Automation script.");
		
		// if (cf.elementEnabled(sel_userType)){
		// 	var mySelect1 = new SelectWrapper(by.xpath(sel_userType_xpath));
		// 	mySelect1.selectByValue(userType);
		// }
	
		// browser.sleep(5000);
		

		// expect(true).toBeTruthy();

	};
this.addUserAccountInfo_internalUser = function(){

		var datetime = require('node-datetime');
		var dt = datetime.create();
		var fomratted = dt.format('m/d/Y H:M:S');
		var spodUserName = data.accData.accountName;
		var email;

		fomratted = fomratted.replace('/', '');
		fomratted = fomratted.replace('/', '');
		fomratted = fomratted.replace(' ', '');
		fomratted = fomratted.replace(':', '');
		fomratted = fomratted.replace(':', '');
		spodUserName = spodUserName+fomratted;
		email =spodUserName+"@pb.com";
		data.accData.accountName = spodUserName;
		data.accData.email = email;
		//var timestamp = cf.getTimeStamp();
		//logger.info(fomratted);

		//Enter Account Info
		ele_fname.sendKeys(data.accData.fName);
		browser.sleep(500);
		ele_lname.sendKeys(data.accData.lName);
		browser.sleep(500);
		ele_email.sendKeys(data.accData.email);
		browser.sleep(500);
		ele_yesTrial.click();
		browser.sleep(500);

	    //Enter User Info
		ele_spodUserName.sendKeys(data.accData.accountName);
		ele_internalUser.click();
		ele_password.sendKeys(data.accData.password);
		ele_description.sendKeys(data.accData.description);

		//browser.sleep(500);
		//ele_description.sendKeys("Account created by Automation script.");
		
		// if (cf.elementEnabled(sel_userType)){
		// 	var mySelect1 = new SelectWrapper(by.xpath(sel_userType_xpath));
		// 	mySelect1.selectByValue(userType);
		// }
	
		// browser.sleep(5000);
		

		// expect(true).toBeTruthy();

	};



	this.filterByAccName = function(){

              

	}

	this.setcompanyInfo = function(companyName){
		
		ele_companyName.sendKeys(companyName);
		browser.sleep(1000);
		element(by.xpath("//li/a[@title='"+companyName+"']")).click();
		
		//	ele_contactNameSugg.sendKeys(protractor.Key.ARROW_DOWN);
		//ele_contactNameSugg.sendKeys(protractor.Key.ENTER);
		browser.sleep(3000);
		//ele_contactNameSugg.sendKeys('your text to send ', protractor.Key.ENTER);
		expect(true).toBeTruthy();
	};

	this.clickSave = function(){
		
		ele_saveButton.click();
		browser.sleep(10000);
	};

	this.getMessage = function(){
		
		var msg = ele_description.getTest();
		return msg;
	};

	this.logout = function(){
		logger.info("Logging out fn.......");

		cf.fnClick(ele_LoggedInUserName);
		browser.sleep(1000);
		cf.fnClick(ele_logoutLink);

		browser.sleep(3000);

		portalURL = env.spodApp.qa_admin.url;
		if(portalURL.indexOf("admin") > -1){
				logger.info("Logging out Admin");
				
					if(cf.elementExist(element(by.name("name")))){
						logger.info("Logging out Admin - Success");
						return true;
					}else{
							logger.fatal("Logging out Admin - Failed");
							return false;
					};

		}else{
			logger.info("Logging out EndUser");

			if(cf.elementExist(element(by.name("username")))){
					logger.info("Logging out EndUser - Success");
					return true;
			}else{
					logger.fatal("Logging out EndUser - Failed");
					return false;
			};
			
		};
	};

	this.Logout = function(){

    ele_userNameLink.click();
    browser.sleep(4000);
	// //div/div/div[2]/ul[2]/li[2]/ul/li[2]/a
	ele_logoutLink.click();
    browser.sleep(15000);

}



};

module.exports = new AccountCreationPage();