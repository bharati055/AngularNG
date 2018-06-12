var AccountMainPage = function(){

	var or=require('../test_data/ObjectRepo.json');
	var logger=require('../utils/log.js');
	var cf = require('../utils/commonFunctions.js');
	var SelectWrapper  = require('../utils/select-wrapper');
	var data = require('../test_data/testData.json');
	var env = require('../test_data/envData.json');

	//Filter elements for enduser and internal users

	var ele_ApplyButton = element(by.xpath("//div[1]/div/div[2]/div[1]/div/div/button"));
	var ele_table_companyNameColumn = element(by.xpath("//div[1]/div/div[2]/div[2]/div[1]/div/table/tbody/tr[1]/td[8]"));
	var ele_table_activeStatusColumn = element(by.xpath("//div[1]/div/div[2]/div[2]/div[1]/div/table/tbody/tr[1]/td[5]"));
	var ele_table_UserTypeColumn = element(by.xpath("//div[1]/div/div[2]/div[2]/div[1]/div/table/tbody/tr[1]/td[3]"));
    var ele_table_accountNameColumn = element(by.xpath("//div[1]/div/div[2]/div[2]/div/div/table/tbody/tr[1]/td[9]"));                         
	var ele_table_trialStatusColumn = element(by.xpath("//div[1]/div/div[2]/div[2]/div[1]/div/table/tbody/tr[1]/td[6]"));
	
	var ele_ParentCo_dropDown = element(by.xpath("//a[@title='Pitney Bowes']"));

	//Filter elements for Admin users

	var ele_ParentCo_Link = element(by.xpath("//div[1]/div/div[2]/div[1]/div/ul/li[1]/div[1]/a"));
	var ele_ParentCo_enterText = element(by.xpath("//div[1]/div/div[2]/div[1]/div/ul/li[1]/div[2]/div/div/input[2]"));

	var ele_Account_Link = element(by.xpath("//div[1]/div/div[2]/div[1]/div/ul/li[2]/div[1]/a"));
	var ele_Account_enterText = element(by.xpath("//div[1]/div/div[2]/div[1]/div/ul/li[2]/div[2]/div/div/input"));


	var ele_UserType_Link_admin = element(by.xpath("//div[1]/div/div[2]/div[1]/div/ul/li[3]/div[1]/a"));
	var ele_AdminUserType_checkBox_admin = element(by.xpath("//div[1]/div/div[2]/div[1]/div/ul/li[3]/div[2]/div/label[1]/span"));
	var ele_InternalUserType_checkBox_admin = element(by.xpath("//div[1]/div/div[2]/div[1]/div/ul/li[3]/div[2]/div/label[2]/span"));
	var ele_EndUserType_checkBox_admin = element(by.xpath("//div[1]/div/div[2]/div[1]/div/ul/li[3]/div[2]/div/label[3]/span"));

	var ele_ActiveTrial_Link_admin = element(by.xpath("//div[1]/div/div[2]/div[1]/div/ul/li[4]/div[1]/a"));
	var ele_ActiveStatus_checkBox_admin = element(by.xpath("//div[1]/div/div[2]/div[1]/div/ul/li[4]/div[2]/div[1]/label[2]/span"));
	var ele_SuspendedStatus_checkBox_admin = element(by.xpath("//div[1]/div/div[2]/div[1]/div/ul/li[4]/div[2]/div[1]/label[3]/span"));
	var ele_DeletedArchivedStatus_checkBox_admin = element(by.xpath("//div[1]/div/div[2]/div[1]/div/ul/li[4]/div[2]/div[1]/p/label/span"));
    var ele_YesTrial_checkBox_admin = element(by.xpath("//div[1]/div/div[2]/div[1]/div/ul/li[4]/div[2]/div[2]/label[2]/span"));
    var ele_NoTrial_checkBox_admin = element(by.xpath("//div[1]/div/div[2]/div[1]/div/ul/li[4]/div[2]/div[2]/label[3]/span"));

	// Filter elements for Internal and EndUsers
	var ele_ActiveTrial_Link = element(by.xpath("//div[1]/div/div[2]/div[1]/div/ul/li[2]/div[1]/a"));
	var ele_ActiveStatus_checkBox = element(by.xpath("//div[1]/div/div[2]/div[1]/div/ul/li[2]/div[2]/div[1]/label[2]/span"));
	var ele_SuspendedStatus_checkBox = element(by.xpath("//div[1]/div/div[2]/div[1]/div/ul/li[2]/div[2]/div[1]/label[3]/span"));
	var ele_DeletedArchivedStatus_checkBox = element(by.xpath("//div[1]/div/div[2]/div[1]/div/ul/li[2]/div[2]/div[1]/p/label/span"));
    var ele_YesTrial_checkBox = element(by.xpath("//div[1]/div/div[2]/div[1]/div/ul/li[2]/div[2]/div[2]/label[2]/span"));
    var ele_NoTrial_checkBox = element(by.xpath("//div[1]/div/div[2]/div[1]/div/ul/li[2]/div[2]/div[2]/label[3]/span"));

	//Editing the Admin users

	var ele_User_ExpandLink_admin = element(by.xpath("//div[1]/div/div[2]/div[2]/div/div/table/tbody/tr[1]/td[1]/a/i"));
	var ele_User_editAccountLink_admin = element(by.xpath("//div[1]/div/div[2]/div[2]/div/div/table/tbody/tr[2]/td/div/div/div[1]/div[2]/a"));
	//table/tbody/tr[2]/td/div/div/div[5]/div[2]/a
	var ele_User_suspendAccountLink_admin = element(by.xpath("//table/tbody/tr[2]/td/div/div/div[5]/div[2]/a"));
	var ele_continueButton_suspendAccountdialog = element(by.xpath("//div[1]/div/div/div[3]/button[1]"));
	var ele_User_deleteAccountLink_admin = element(by.xpath("//table/tbody/tr[2]/td/div/div/div[7]/div[2]/a"));
	var ele_continueButton_deleteAccountdialog = element(by.xpath("//div[1]/div/div/div[3]/button[1]"));
	var ele_User_descriptionField_admin = element(by.xpath("//div[1]/div/div[2]/div[2]/div/div/table/tbody/tr[2]/td/div/div/div[1]/div[2]/a"));
	
    this.ele_User_deleteAccountLink_admin_fn = function () {
		return ele_User_deleteAccountLink_admin;
	}
   this.ele_continueButton_deleteAccountdialog_fn = function () {
		return ele_continueButton_deleteAccountdialog;
	}
	
	this.ele_User_suspendAccountLink_admin_fn = function () {
		return ele_User_suspendAccountLink_admin;
	}
   this.ele_continueButton_suspendAccountdialog_fn = function () {
		return ele_continueButton_suspendAccountdialog;
	}

	this.ele_table_UserTypeColumn_fn = function () {
		return ele_table_UserTypeColumn;
	}

	this.ele_User_ExpandLink_admin_fn = function () {
		return ele_User_ExpandLink_admin;
	}

	this.ele_User_editAccountLink_admin_fn = function () {
		return ele_User_editAccountLink_admin;
	}
		
	this.ele_UserType_Link_admin_fn = function () {
		return ele_UserType_Link_admin;
	}
	this.ele_AdminUserType_checkBox_admin_fn = function () {
		return ele_AdminUserType_checkBox_admin;
	}

	this.ele_InternalUserType_checkBox_admin_fn = function () {
		return ele_InternalUserType_checkBox_admin;
	}

	this.ele_EndUserType_checkBox_admin_fn = function () {
		return ele_EndUserType_checkBox_admin;
	}

	this.ele_ApplyButton_fn = function () {
		return ele_ApplyButton;
	}
	this.ele_table_companyNameColumn_fn = function () {
		return ele_table_companyNameColumn;
	}

	this.ele_table_accountNameColumn_fn = function () {
		return ele_table_accountNameColumn;
	}

	this.ele_table_activeStatusColumn_fn = function () {
		return ele_table_activeStatusColumn;
	}

	this.ele_table_trialStatusColumn_fn = function () {
		return ele_table_trialStatusColumn;
	}

	this.ele_ParentCo_dropDown_fn = function () {
		return ele_ParentCo_dropDown;
	}

	this.ele_ParentCo_Link_fn = function () {
		return ele_ParentCo_Link;
	}

	this.ele_Account_Link_fn = function () {
		return ele_Account_Link;
	}

	this.ele_Account_enterText_fn = function () {
		return ele_Account_enterText;
	}

	this.ele_ParentCo_enterText_fn = function () {
		return ele_ParentCo_enterText;
	}
   this.ele_ActiveTrial_Link_fn = function () {
		return ele_ActiveTrial_Link;
	}

	this.ele_ActiveStatus_checkBox_fn = function () {
		return ele_ActiveStatus_checkBox;
	}
    this.ele_SuspendedStatus_checkBox_fn = function () {
		return ele_SuspendedStatus_checkBox;
	}

	this.ele_DeletedArchivedStatus_checkBox_fn = function () {
		return ele_DeletedArchivedStatus_checkBox;
	}
    this.ele_YesTrial_checkBox_fn = function () {
		return ele_YesTrial_checkBox;
	}

	this.ele_NoTrial_checkBox_fn = function () {
		return ele_NoTrial_checkBox;
	}

	//

	this.ele_ActiveTrial_Link_admin_fn = function () {
		return ele_ActiveTrial_Link_admin;
	}

	this.ele_ActiveStatus_checkBox_admin_fn = function () {
		return ele_ActiveStatus_checkBox_admin;
	}
    this.ele_SuspendedStatus_checkBox_admin_fn = function () {
		return ele_SuspendedStatus_checkBox_admin;
	}

	this.ele_DeletedArchivedStatus_checkBox_admin_fn = function () {
		return ele_DeletedArchivedStatus_checkBox_admin;
	}
    this.ele_YesTrial_checkBox_admin_fn = function () {
		return ele_YesTrial_checkBox_admin;
	}

	this.ele_NoTrial_checkBox_admin_fn = function () {
		return ele_NoTrial_checkBox_admin;
	}
    
}

	    module.exports = new AccountMainPage();