const mongoose = require("mongoose");
const {UserSchema} = require("../schemas/UserSchema");
const passportLocalMongoose = require("passport-local-mongoose")


const userModel = mongoose.model("User", UserSchema);

module.exports = { userModel };
