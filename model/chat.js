const mongo = require("mongoose");
const Schema = mongo.Schema;
const Chat = new Schema({
  //name: String,
  message:String,
  date:Date
});
module.exports = mongo.model("chat", Chat);