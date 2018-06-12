var AddCompanyPage = function(){

	var or=require('../test_data/ObjectRepo.json');
	var logger=require('../utils/log.js');
	var cf = require('../utils/commonFunctions.js');
	var SelectWrapper  = require('../utils/select-wrapper');
	var data = require('../test_data/testData.json');
	var env = require('../test_data/envData.json');

	//Page elements
    var ele_addCompany_coName = element(by.xpath("//div[1]/div/div/div[2]/form/div[1]/div[1]/div/input"));
    var ele_addCompany_coURL = element(by.xpath("//div[1]/div/div/div[2]/form/div[1]/div[2]/div/input"));
	var ele_addCompany_coAlias = element(by.xpath("//div[1]/div/div/div[2]/form/div[1]/div[3]/div/input"));
	var ele_addCompany_coParentName = element(by.xpath("//div[1]/div/div/div[2]/form/div[2]/div/div/input"));
	var ele_addCompany_coSaveButton = element(by.xpath("//div[1]/div/div/div[3]/div/button[1]"));

    this.ele_addCompany_coName = function () {
		return ele_addCompany_coName;
	}

	this.ele_addCompany_coURL = function () {
		return ele_addCompany_coURL;
	}

	this.ele_addCompany_coAlias = function () {
		return ele_addCompany_coAlias;
	}
   this.ele_addCompany_coParentName = function () {
		return ele_addCompany_coParentName;
	}

	this.ele_addCompany_coSaveButton_fn = function () {
		return ele_addCompany_coSaveButton;
	}
    this.enter_CoInformation = function () {
		ele_addCompany_coName.clear();
		ele_addCompany_coName.sendKeys(data.companyInfo_eu.companyName);
		ele_addCompany_coURL.sendKeys(data.companyInfo_eu.companyURL);
		ele_addCompany_coAlias.sendKeys(data.companyInfo_eu.companyAlias);
		ele_addCompany_coParentName.sendKeys(data.companyInfo_eu.companyParentName);

	
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

	    module.exports = new AddCompanyPage();