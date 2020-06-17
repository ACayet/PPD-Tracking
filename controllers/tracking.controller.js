const gtfri = require('../models/trackingGTFRI.model')
const gtodb = require('../models/trackingGTODB.model')

var controller = {
    addDataTracking: (req, res, next) => {
        console.log(req.body);

        var dataCar = req.body;

        console.log("latitude: " + dataCar[0]["position.latitude"]);
        console.log("longitude: " + dataCar[0]["position.longitude"]);

        res.render("testjson", { data: req.body }); // move this line to the future function requeting the database
    },
    mainPage: (req, res, next) => {
        res.render("index", { title: "PPD-Tracking" });
    }
};

module.exports = controller;