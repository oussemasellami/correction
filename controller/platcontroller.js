const Plat = require("../model/plat");

async function add(req, res, next) {
  try {
    const plat = new Plat({
      nom: req.body.nom,
      description: req.body.description,
      prix: req.body.prix,
      etat: "non_servi",
      id: "null",
    });

    await plat.save();
    res.status(200).send("add good");
  } catch (err) {
    console.log(err);
  }
}

async function show(req, res, next) {
  try {
    const data = await Plat.find();
    res.json(data);
  } catch (err) {
    console.log(err);
  }
}

async function update(req, res, next) {
  try {
    await Plat.findByIdAndUpdate(req.params.id, req.body);
    res.send("updated");
  } catch (err) {
    console.log(err);
  }
}

async function deleteplat(req, res, next) {
  try {
    await Plat.findByIdAndDelete(req.params.id);
    res.send("updated");
  } catch (err) {
    console.log(err);
  }
}

module.exports = { add, show, update, deleteplat };
