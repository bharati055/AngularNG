var CommonFunctions = function(){

var logger = require('./log.js');
var env = require('../test_data/envData.json');

var EC = protractor.ExpectedConditions;

	this.launchFCC = function(environment){

		if (environment === 'spectrumfcc') {
			url = env.qa.spectrumfcc.fccURL;
		};
		if (environment === 'spectrumfcc1') {
			url = env.qa.spectrumfcc1.fccURL;
		};
		if (environment === 'fccperf4') {
			url = env.qa.fccperf4.fccURL;	
		};

		logger.info('Launching app env - spectrum-fcc | URL - '+ url);
		browser.get(url);
		browser.sleep(2000);
		browser.manage().window().maximize();
		       
	};
	
	this.navigateToURL = function(url){
		
		browser.navigate.to(url);
		browser.sleep(7000);
									   
	};

    this.getPageTitle = function()
	{                         
		return browser.getTitle();

	};

	this.getURL = function(){
		return browser.getCurrentUrl();
	}

    this.fnClick = function(ele)
    {
		logger.info("fnClick >> "+ this.getElementName(ele));
		ele.click();
    };

    this.fnSendKeys = function(ele,strValue)
    {
		logger.info("fnSet >> Element - "+ this.getElementName(ele) +"Value to set - "+strValue);
        ele.sendKeys(strValue);
        
    };

   
	//waitForElement - wait for element for the timeout given
	this.waitForElement = function(element,timeOut){
		browser.wait(EC.presenceOf(element), timeOut);
		if (element.isEnabled()){
			return true;
		}else{
			this.reportStep(false,"Element does not exist - "+ this.getElementName(element));
			return false;
		}
	};	
	
	//wait for element for 30 seconds
	this.elementExist = function(element){
		browser.wait(EC.presenceOf(element), 30000);
		if (element.isEnabled()){
			return true;
		}else{
			this.reportStep(false,"Element does not exist - "+ this.getElementName(element));
			return false;
		}
	};

	//check if element is editable
	this.elementEnabled = function(element){
		browser.wait(EC.presenceOf(element), 3000);
		if (element.isEnabled()){
			return true;
		}else{
			//this.reportStep(false,"Element does not exist - "+ this.getElementName(element));
			return false;
		}
	};
	
    //MouseOver function
	this.mouseHover = function(element){
		if (this.elementExist(element)){
			browser.actions().mouseMove(element).perform();
			return true;
		}else{
			this.reportStep(false,"Unable to mouseOver - "+ this.getElementName(element));
			return false;
		}
		
	};

	//execute external file
	this.executeFile =function(fileNamrPath){
		   
		var exec = require('child_process').execFile;
	  
	   exec(fileNamrPath, function(err, data) {  
	        logger.info(err)
	        logger.info(data.toString());                       
	    });  
	};

    //execute command
	this.executeCmd =function(command){
		   
		var exec = require('child_process').exec;
        exec(command, function(error, stdout, stderr) {
            logger.info('stdout: ' + stdout);
            logger.info('stderr: ' + stderr);
            if (error !== null) {
                logger.info('exec error: ' + error);
            }
        });
	};
    
	//report status
	this.reportStep= function(blnResult,description){
		if (!blnResult){
			logger.info("Execution Failed. Detail - "+description);
			//browser.driver.close();
		};
	};

    //return object as string
	this.getElementName = function(ele){
		//return ele.getAttribute("name");
		// return ele.getAttribute('name').promise.fulfilled(fn(this));

		var result = ele.getAttribute('name').then(function(attr) {
			//console.log('Inside promise - Ele Name'+attr);
			return attr;
		});
	};

	//return windows handles when it matches the parameter 'count'
	this.windowCount = function(count){
		logger.info("windowCount");
		return browser.getAllWindowHandles().then(function (handles) {
				logger.info("Total Windows" + handles.length);
				return handles.length === count;
			});
	};

	this.expecttocontain = function(actual,expected){
		if(actual===expected){
			logger.info("Function expect_tocontain >> Actual - " + actual + "| Expected - " +expected);
			//return true;
			flag = true;
		}else{
			logger.fatal("Function expect_tocontain >> Actual - " + actual + "| Expected - " +expected);
			//return false;
			flag = false;
		}
		expect(flag).toBeTruthy();
	}

	this.expectURLtocontain = function(expected){
	
		browser.getCurrentUrl().then(function(currURL) {
			if(currURL.indexOf(expected) > -1){
				logger.info("Function expectURLtocontain >> currURL - " + currURL + "| Expected - " +expected);
				//return true;
				flag = true;
			}else{
				logger.fatal("Function expectURLtocontain >> currURL - " + currURL + "| Expected - " +expected);
				//return false;
				flag = false;
			}
			expect(flag).toBeTruthy();
		});
		
		// var currURL = browser.getCurrentUrl();
		
	}

	this.expecPageTitle = function(expected){
		var pageTitle = cf.getPageTitle().then(function(result){
			this.expecttocontain(result,expected);
		});

	}

	this.loginEU = function() {

		browser.get(url);
        browser.sleep(5000);
    	browser.manage().window().maximize();
        

	}
	

	this.getTimeStamp = function(){
		var datetime = require('node-datetime');
		var dt = datetime.create();
		var fomratted = dt.format('m/d/Y H:M:S');
		// fomratted = fomratted.replace('/', '');
		// fomratted = fomratted.replace(' ', '');
		// fomratted = fomratted.replace(':', '');
		return formatted;
	}

	// function windowCount (count) {
    // 	return function () {
    //     	return browser.getAllWindowHandles().then(function (handles) {
	// 			//logger.info("Total Windows" + handles.length);
    //         	return handles.length === count;
    //     	});
    // 	};
	// };
};

module.exports = new CommonFunctions();