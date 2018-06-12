var automationDBModule = function(){

    var mysql = require('mysql');
    var env = require('../test_data/envData.json');	
    var logger = require('./log.js');


    var conn = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        port: "3306",
        password: "automation@2017",
        database: "automationdb"
    });

    conn.connect(function(err) {
        if (err) throw err;
    });

    this.runQuery = function(){

            console.log('Inside automationdb >> Run function.');
            var queryString = "SELECT * from automationdb.result where id ='1'";
            logger.info(queryString)
            conn.query(queryString,
            function(err, rows) {
                if(err) throw err;
                logger.info('Inside query func');
                logger.info(rows[0]);
                //expect(data.accData.email).toContain(rows[0].email);
                
            });
            
    };

    this.insertResultToDB = function(){

        var testEnvironment = browser.params.env || "QA";
        var spodBuild = browser.params.build || "QA_Build";

        var datetime = require('node-datetime');
		var dt = datetime.create();
		var fomrattedDate = '20'+dt.format('y-m-d H:M:S');
        
        logger.info('date time stamp - '+fomrattedDate);
        logger.info('Inside automationdb >> Insert result function.');
        logger.info('test env-------'+testEnvironment);
        logger.info('test build-------'+spodBuild);

        results= require('../jasmine-test-results.json');

        var projID = '15';
        var env = testEnvironment;
        var buildNo = spodBuild;
        var testType = 'smoke';
        // var testName = 'test case - insert from protractor';
        // var testResult = 'pass';
        // var timeStamp = "2017-06-28 00:00:00"//Date.now();
        // var resultHtml = 'NA';
        // var screenshot = 'NA';

        console.log(timeStamp);
        //console.log(resultsJson.suite1.fullName);

        // var results = JSON.parse(resultsJson);

        for(var i in results){
            console.log(results[i].id);
            console.log(results[i].fullName);
            console.log(results[i].specs[0].status);

            //test name
            var testName = results[i].fullName;
            //Current time stamp
            var timeStamp = fomrattedDate

            //Test case status
            // var testResult = results[i].specs[0].status;
            var testResult = 'Pass';
            var failureDetail = '';
                     
            for(var j in results[i].specs){
                if(results[i].specs[j].status === 'failed'){
                    testResult = 'Fail';
                    failureDetail = failureDetail + JSON.stringify(results[i].specs[j].failedExpectations[0].message);
                    
                    logger.info('Failure reason - '+ failureDetail);
                }
            }


            //Screenshot detail
            var screenshot = 'NA';

            var queryString = "INSERT INTO `automationdb`.`result` (`proj_id`, `env`, `build_no`, `test_type`, `test_name`, `test_result`, `time_stamp`, `result_detail`, `screenshot`) VALUES ('"+ projID +"', '"+ env +"', '"+ buildNo +"', '"+ testType +"', '"+ testName +"', '"+ testResult +"', '"+ timeStamp +"', '"+ failureDetail +"', '"+ screenshot +"')"
            logger.info(queryString);
            conn.query(queryString,
            function(err, rows) {
                if(err) throw err;
            });
        }

        
        // var queryString = "INSERT INTO `automationdb`.`result` (`proj_id`, `env`, `build_no`, `test_type`, `test_name`, `test_result`, `result_detail`, `screenshot`) VALUES ('"+ projID +"', '"+ env +"', '"+ buildNo +"', '"+ testType +"', '"+ testName +"', '"+ testResult +"','"+ resultHtml +"', '"+ screenshot +"')";

        //var queryString = "SELECT * from automationdb.result where id ='1'";
        

    };
 
};    
module.exports = new automationDBModule();