var AddContactPage = function(){

	var or=require('../test_data/ObjectRepo.json');
	var logger=require('../utils/log.js');
	var cf = require('../utils/commonFunctions.js');
	var SelectWrapper  = require('../utils/select-wrapper');
	var data = require('../test_data/testData.json');
	var env = require('../test_data/envData.json');

	//Page elements
	var ele_contactTitle = element(by.xpath("//label[text()='Title']/../select/option[2]"));
    var ele_contactName =	element(by.name("contact_name"));
    var ele_contactEmail =	element(by.name("email"));
	var ele_contactPhoneNumber = element(by.xpath("//div[1]/div/div/div[2]/form/div[2]/div[1]/div/input"));
    var ele_contactAddLine1 = element(by.xpath("//div[1]/div/div/div[2]/form/div[2]/div[2]/div/input"));
    var ele_contactAddLine2 = element(by.xpath("//div[1]/div/div/div[2]/form/div[2]/div[3]/div/input"));
    var ele_contactCity = element(by.xpath("//div[1]/div/div/div[2]/form/div[3]/div[1]/div/input"));
    var ele_contactState = element(by.xpath("//div[1]/div/div/div[2]/form/div[3]/div[2]/div/input"));
    var ele_contactZipCode = element(by.xpath("//div[1]/div/div/div[2]/form/div[3]/div[3]/div/input"));
    var ele_contactSaveButton = element(by.xpath("//div[1]/div/div/div[3]/div/button[1]"));

    this.ele_contactTitle = function () {
		return ele_contactTitle;
	}

	this.ele_contactSaveButton = function () {
		return ele_contactSaveButton;
	}

	this.ele_contactName = function () {
		return ele_contactName;
	}
   this.ele_contactEmail = function () {
		return ele_contactEmail;
	}

	this.ele_contactPhoneNumber = function () {
		return ele_contactPhoneNumber;
	}
    this.ele_contactAddLine1 = function () {
		return ele_contactAddLine1;
	}

	this.ele_contactAddLine2 = function () {
		return ele_contactAddLine2;
	}
    this.ele_contactCity = function () {
		return ele_contactCity;
	}

	this.ele_contactState = function () {
		return ele_contactState;
	}
    this.ele_contactZipCode = function () {
		return ele_contactZipCode;
	}

	this.ele_contactSaveButton = function () {
		return ele_contactSaveButton;
	}

	this.enter_ContactInformation = function () {
		ele_contactName.clear();
		var datetime = require('node-datetime');
		var dt = datetime.create();
		var fomratted = dt.format('m/d/Y H:M:S');

		fomratted = fomratted.replace('/', '');
		fomratted = fomratted.replace('/', '');
		fomratted = fomratted.replace(' ', '');
		fomratted = fomratted.replace(':', '');
		fomratted = fomratted.replace(':', '');

        var contactName = data.contactInfo_admin.contactName + fomratted 
        data.contactInfo_admin.contactName = contactName 

		var contactEmail = data.contactInfo_admin.contactEmail + fomratted +'@pb.com'
        data.contactInfo_admin.contactEmail = contactEmail

		ele_contactName.sendKeys(contactName);
		ele_contactEmail.sendKeys(contactEmail);
		ele_contactPhoneNumber.sendKeys(data.contactInfo_admin.contactPhoneNumber);
		ele_contactAddLine1.sendKeys(data.contactInfo_admin.contactAddLine1);
		ele_contactCity.sendKeys(data.contactInfo_admin.contactCity);
		ele_contactState.sendKeys(data.contactInfo_admin.contactState);
		ele_contactZipCode.sendKeys(data.contactInfo_admin.contactZipCode);
	
	}

	this.ele_contactName_enterName = function () {
        return ele_contactName.sendKeys('Nitin Test1')
	}

    this.ele_contactEmail_enterEmail = function () {
        return ele_contactEmail.sendKeys('NitinTest1@pb.com')
	}
     this.ele_contactPhoneNumber_enterPhNo = function () {
        return ele_contactPhoneNumber.sendKeys('7685675646')
	}
    this.ele_contactAddLine1_enterAddLine1 = function () {
        return ele_contactAddLine1.sendKeys('50 water st')
	}
    this.ele_contactCity_enterCity = function () {
        return ele_contactCity.sendKeys('Lee')
	}
    this.ele_contactState_enterState = function () {
        return ele_contactState.sendKeys('MA')
	}
    this.ele_contactZipCode_enterZipCode = function () {
        return ele_contactZipCode.sendKeys('01238')
	}

}

	    module.exports = new AddContactPage();