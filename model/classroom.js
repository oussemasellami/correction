const mongo = require("mongoose");
const Schema = mongo.Schema;
const Classroom = new Schema({
  name: String,
  email: String,
  nbrstudent: Number,
});
module.exports = mongo.model("classroom", Classroom);
