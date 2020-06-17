const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GtodbSchema = new Schema(
    {

    },
    { collection: "GtodbTracking", timestamps: true }
  );

const model = mongoose.model("Gtodb", GtodbSchema);

module.exports = model;
