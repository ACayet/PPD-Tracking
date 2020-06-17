const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GtodbSchema = new Schema(
    {
      nomDevice: {type: String, required: true},
      idDevice: {type: Number, required: true},
      IMEI: {type: Number, required: true},
      vitesseVehicule: {type: Number, required: true},
      accelerationPedalPourcent: {type: Number, required: true},
      vitesseMoteur: {type: Number, required: true},
      chargeMoteurPourcent: {type: Number, required: true},
      temperatureLiquideRefroidissement: {type: Number, required: true},
      voltageModuleControle: {type: Number, required: true}
    },
    { collection: "GtodbTracking", timestamps: true }
  );

const model = mongoose.model("GTODB", GtodbSchema);

module.exports = model;
