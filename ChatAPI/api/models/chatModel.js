"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var MessageSchema = new Schema({
  name: {
    type: String,
    required: "Kindly entre the sender name"
  },
  avatar: { type: String, required: "Kindly enter the avatar index" },
  message: { type: String, required: "Kindly enter the text message" },
  room: { type: String, required: "Kindly enter the room" },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model("Message", MessageSchema);
