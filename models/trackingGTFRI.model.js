const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GtfriSchema = new Schema(
    {
      nomDevice: {type: String, required: true},
      idDevice: {type: Number, required: true},
      IMEI: {type: Number, required: true},
      enMouvement: {type: Boolean, required: true},
      latitude: {type: Number, required: true},
      longitude: {type: Number, required: true},
      positionTimestamp: {type: Date, required: true},
      moteurAllumé: {type: Boolean, required: true},
      statusVehicule: {type: String, required: true}
    },
    { collection: "GtfriTracking", timestamps: true }
  );

const model = mongoose.model("GTFRI", GtfriSchema);

module.exports = model;
