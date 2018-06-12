var mysql = require('mysql');
var env = require('../test_data/envData.json');	

var connection = mysql.createConnection({
    host: env.scpdb.host,
    user: env.scpdb.user,
    port: env.scpdb.port,
    password: env.scpdb.password,
    database: env.scpdb.database
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;