const Gtfri = require('../models/trackingGTFRI.model')
const Gtodb = require('../models/trackingGTODB.model')

var controller = {
    addDataTracking: (req, res, next) => {

        var dataCar = req.body

        var dbEntry;

        if(dataCar[0]["report.code"] == "GTOBD"){
            dbEntry = {
                nomDevice: dataCar[0]["device.name"],
                idDevice: dataCar[0]["device.id"],
                IMEI: dataCar[0]["ident"],
                vitesseVehicule: dataCar[0]["can.vehicle.speed"],
                accelerationPedalPourcent: dataCar[0]["can.throttle.pedal.level"],
                vitesseMoteur: dataCar[0]["can.engine.rpm"],
                chargeMoteurPourcent: dataCar[0]["can.engine.load.level"],
                temperatureLiquideRefroidissement: dataCar[0]["can.engine.coolant.temperature"],
                voltageModuleControle: dataCar[0]["can.control.module.voltage"]
            }
            Gtodb.create(dbEntry)
            .then(
                (gtodb) => {
                    res.statusCode = 201;
                },
                (err) => next(err)
            )
            .catch((err) => next(err));
        } else if(dataCar[0]["report.code"] == "GTFRI") {
            dbEntry = {
                nomDevice: dataCar[0]["device.name"],
                idDevice: dataCar[0]["device.id"],
                IMEI: dataCar[0]["ident"],
                enMouvement: dataCar[0]["movement.status"],
                latitude: dataCar[0]["position.latitude"],
                longitude: dataCar[0]["position.longitude"],
                positionTimestamp: new Date(dataCar[0]["position.timestamp"]*1000),
                moteurAllumé: dataCar[0]["engine.ignition.status"],
                statusVehicule: dataCar[0]["vehicle.state"]
            }
            console.log(dataCar[0]["position.timestamp"])
            console.log(dbEntry)
            Gtfri.create(dbEntry)
            .then(
                (gtfri) => {
                    res.statusCode = 201;
                },
                (err) => next(err)
            )
            .catch((err) => next(err));
        } else {

        }

        console.log("latitude: " + dataCar[0]["position.latitude"]);
        console.log("longitude: " + dataCar[0]["position.longitude"]);

        res.render("testjson", { data: dataCar }); // move this line to the future function requeting the database
    },
    mainPage: (req, res, next) => {
        res.render("index", { title: "PPD-Tracking" });
    }
};

module.exports = controller;