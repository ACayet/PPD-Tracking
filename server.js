var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');

var PORT = 3000;

app.use(express.json({
    extended: false
}));

var con = mysql.createConnection({
  host: "81.249.248.36",
  port: "8457",
  user: "ppd",
  password: "ppdraspberrypi",
  database: "tracking"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Successfully connected to the database !");
});

app.use(bodyParser.json())

app.get('/', function(req, res){
  res.render('index.ejs');
});

app.post('/', function(req, res){
  var jsondata = JSON.stringify(req.body);
  var objectValue = JSON.parse(jsondata);

  console.log("latitude: " + objectValue['position.latitude']);
  console.log("longitude: " + objectValue['position.longitude']);

  con.query("INSERT INTO trackingData (latitude, longitude) VALUES ("+objectValue['position.latitude']+","+objectValue['position.longitude']+")", function(err,result) {
    if(err) {
      console.log('Error in adding data to the database');
    }
   else {
      console.log('Success in adding data to the database');
    }
  });

  res.render('testjson.ejs', {data: req.body}); // move this line to the future function requeting the database

});

//Start the server and make it listen for connections
var listener = app.listen(process.env.PORT || PORT, function() {
    console.log('Server is running on PORT:', listener.address().port);
});
