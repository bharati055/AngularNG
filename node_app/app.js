var express = require('express');
var app = express();

var port = process.env.PORT || 3003;

app.get('/', function(req, res) {

   //res.sendfile(__dirname + '/target/htmlReport.html');

   res.sendFile(__dirname + '../target/htmlReport.html', function (err) {
    if (err) {
      res.status(404).sendFile(__dirname + '../target/public/notfound.html');
    } else {
      console.log('Sent:', fileName);
    }
  });
   

});



app.get('../screenshots/:screenShotNum', function(req, res) {
   
   res.sendfile(__dirname + '../target/screenshots/'+req.params.screenShotNum);
   

});

app.listen(port);   