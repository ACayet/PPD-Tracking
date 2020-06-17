const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GtfriSchema = new Schema(
    {

    },
    { collection: "GtfriTracking", timestamps: true }
  );

const model = mongoose.model("Gtfri", GtfriSchema);

module.exports = model;
