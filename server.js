/**
 * Import modules and config
 * @requires
 */
const express = require("express");
const mysql = require('mysql');
require('dotenv').config()
const fs = require('fs')

var app = express();

app.use(express.json({
  extended: false
}));

var con = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_BASE
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Successfully connected to the database !");
});

app.get('/', function(req, res){
  res.render('index.ejs');
});

app.post('/', function(req, res){

  console.log(req.body);

  var dataCar = req.body;
  console.log(dataCar);

  console.log("latitude: " + dataCar[0]['position.latitude']);
  console.log("longitude: " + dataCar[0]['position.longitude']);

  con.query("INSERT INTO trackingData (latitude, longitude) VALUES ("+objectValue['position.latitude']+","+objectValue['position.longitude']+")", function(err,result) {
    if(err) {
      console.log('Error in adding data to the database');
    }
   else {
      console.log('Success in adding data to the database');
    }
  });

  res.render('testjson.ejs', {data: req.body}); // move this line to the future function requeting the database
  res.end();
});

//Start the server and make it listen for connections
var listener = app.listen(process.env.PORT || 3000, function() {
    console.log('Server is running on PORT:', listener.address().port);
});
