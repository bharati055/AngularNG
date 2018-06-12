var sendEmail = function() {

	
	this.send = function(element){
			var nodemailer = require("nodemailer");
			var smtpTransport = require("nodemailer-smtp-transport");

			var transport = nodemailer.createTransport(smtpTransport({
			host: 'mail.pb.com',
			port: 25,
			
			}));

			
			console.log("SMTP Configured");
			console.log('Environment: ' + browser.params.env);
			console.log('Build No   : ' + browser.params.build);
			console.log('Test Pack  : SMOKE');

			var mailOptions = {
				from: 'SPOD2_Automation_Team@pb.com', //'ConnectorsSaas_Automation@pb.com', //// sender address
				//to: 'Amit.Singh3@pb.com;Ishan.Misra@pb.com;Kanupriya.Sharma@pb.com;Manish.Kukreja@pb.com;nitin.laroia@pb.com;parag.mittal@pb.com;vikas.bharati@pb.com', // list of receivers
				 to:'vikas.bharati@pb.com',
				subject: 'Automation Test Result | SPOD2.0 |' + browser.params.env +' | '+ browser.params.build, // Subject line
				text: 'Hi Team,'+ 
				'\n ' +
				'\n Please find below the test results of SPOD2 Automation run:' +
				'\n Detailed Allure reports for latest build can be found at: http://QASPOD2:3003/' + //replace this url by your jenkins node ip on which test is running
				'\n Allure results has also been artifacted for all builds on jenkins instance' + // plaintext body
				'\n  ' + 
				'\n  Environment: ' + browser.params.env + 
				'\n  Build No   : ' + browser.params.build+
				'\n  Test Pack  : SMOKE' + 
				'\n  ' +
				'\n Regards' +
				'\n SPOD2 Automation Team'
     			// attachments: [
				// 	{
				// 		//'filename': 'Results.html',
				// 		//'filePath': '../target/Results.html'
				// 		//'filePath': './target/site/allure-maven-plugin'
				// 	}
				// ]        
			};

			console.log("mailOptions Configured");

			
			transport.sendMail(mailOptions, function (error, response) {
				if (error) {
					console.log(error.toString());
				} else {
					console.log("Message sent: " + response.message);
				}

			});
			browser.sleep(10000);

			// var q = require('q');

			// return q.fcall(function()
			// {
			// 	transport.sendMail(mailOptions, function (error, response) {
			// 		if (error) {
			// 			console.log(error.toString());
			// 		} else {
			// 			console.log("Message sent: " + response.message);
			// 		}
			// 	});

			// }).delay(20000);
		
	};

	
};

module.exports = new sendEmail();
