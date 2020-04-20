var express = require("express");
var app = express();

var PORT = 3000;

app.use(express.json({
    extended: false
}));

app.get('/', function(req, res){
    res.render('index.ejs');
});

app.post('/', function(req, res){
    console.log(req.body);
    //console.log(JSON.stringify(req.body, null, 4));
    res.render('testjson.ejs', {data: req.body});
});

//Start the server and make it listen for connections
app.listen(PORT, function() {
    console.log('Server is running on PORT:', PORT);
});
