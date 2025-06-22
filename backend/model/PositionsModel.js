const mongoose  = require("mongoose");
const model = mongoose.model;
const {PositionsSchema} = require("../schemas/PositionsSchema");

const  PositionsModel = model("position" , PositionsSchema);

module.exports = {PositionsModel};