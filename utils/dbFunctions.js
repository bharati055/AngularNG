var dbFunctions = function(){
   var mysql = require('mysql');
   var env = require('../test_data/envData.json');	
   var con = null;

   this.getDBInstance = function(accountName,email){

       console.log('Inside DB func for AccName - '+ accountName + env.scpdb_host);
       
		con = mysql.createConnection({
            host: env.scpdb_host,
            user: env.scpdb_user,
            port: env.scpdb_port,
            password: env.scpdb_password,
            database: env.scpdb_database
	    });

        con.connect();
        return con;
   };


   this.validateInDB = function(accountName,email){

       console.log('Inside DB func for AccName - '+ accountName + env.scpdb_host);
       
		var con = mysql.createConnection({
            host: env.scpdb_host,
            user: env.scpdb_user,
            port: env.scpdb_port,
            password: env.scpdb_password,
            database: env.scpdb_database
	    });

        con.connect();
        var queryString = "SELECT * from scpdb.account where name = '"+accountName+"'"
        var response = "Before response++++"
        console.log(queryString)

	    con.query(queryString,
		function(err, rows) {
			if(err) throw err;
            console.log('Inside query func');
            console.log('Sample DB output result - '+rows[0].email);
            response = JSON.stringify(rows)
            expect("email").toEqual(rows[0].email);
        });

        browser.sleep(4000);
        console.log(response)
        return response;
   };


   this.queryDB = function(accountName){

       console.log('Inside DB func for AccName - '+accountName + env.scpdb_host);
       
		var con = mysql.createConnection({
            host: env.scpdb_host,
            user: env.scpdb_user,
            port: env.scpdb_port,
            password: env.scpdb_password,
            database: env.scpdb_database
	    });

        con.connect();
        var queryString = "SELECT * from scpdb.account where name = '"+accountName+"'"
        var response
        console.log(queryString)

	    con.query(queryString,
		function(err, rows) {
			if(err) throw err;
            console.log('Inside query func');
            console.log('Sample DB output result - '+rows[0].email);
            response = JSON.stringify(rows)
        });

        browser.sleep(4000);
        return response;
   };
 	
 };
module.exports = new dbFunctions();