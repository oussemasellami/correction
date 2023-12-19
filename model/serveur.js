const mongo = require("mongoose");
const Schema = mongo.Schema;
const Serveur = new Schema({
  nom: String,
  age: Number,
});
module.exports = mongo.model("serveur", Serveur);
