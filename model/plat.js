const mongo = require("mongoose");
const { string } = require("yup");
const Schema = mongo.Schema;
const Plat = new Schema({
  nom: String,
  id_serveur: String,
  prix: Number,
  etat: String,
  description: String,
});
module.exports = mongo.model("plat", Plat);
