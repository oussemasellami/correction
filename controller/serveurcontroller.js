const Serveur = require("../model/serveur");
const plat = require("../model/plat");

async function add(req, res, next) {
  try {
    console.log("body :" + JSON.stringify(req.body));
    const serveur = new Serveur(req.body);
    await serveur.save();
    res.send("serveur add");
  } catch (err) {
    console.log(err);
  }
}

async function getall(req, res, next) {
  try {
    const data = await Serveur.find();
    res.json(data);
  } catch (err) {
    console.log(err);
  }
}

async function getbyid(req, res, next) {
  try {
    const data = await Serveur.findById(req.params.id);
    res.json(data);
  } catch (err) {
    console.log(err);
  }
}

async function deletebyid(req, res, next) {
  try {
    const serveur = await Serveur.findByIdAndDelete(req.params.id);
    if (!serveur) {
      return res.status(404).json({ error: "serveur not found" });
    }
    res.json({ message: "Serveur deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function attaque(req, res, next) {
  try {
    const j1 = await Joueur.findById(req.params.id1);
    const j2 = await Joueur.findById(req.params.id2);
    score1 = j1.score + 10;
    sante2 = j2.sante - 20;

    const j1u = await Joueur.findByIdAndUpdate(req.params.id1, {
      score: score1,
    });
    const j2u = await Joueur.findByIdAndUpdate(req.params.id2, {
      sante: sante2,
    });
    res.send(j1u + "a attaque" + j2u);
  } catch (err) {
    console.log(err);
  }
}

async function addpartie(req, res, next) {
  try {
    const partie = new Partie({
      nom: req.body.nom,
      joueur_1: req.params.id1,
      joueur_2: req.params.id2,
      etat: "EN COURS",
    });
    await partie.save();
    res.status(200).send("add good partie");
  } catch (err) {
    console.log(err);
  }
}
async function addpartiesocket(data) {
  try {
    const partie = new Partie({
      nom: data.nom,
      joueur_1: data.id1,
      joueur_2: data.id2,
      etat: "EN COURS",
    });
    console.log("jjjjj" + JSON.stringify(data));
    const ju1 = await Joueur.findByIdAndUpdate(data.id2, {
      sante: 100,
      score: 0,
    });
    const ju2 = await Joueur.findByIdAndUpdate(data.id3, {
      sante: 100,
      score: 0,
    });
    await partie.save();
    //res.status(200).send("add good partie");
  } catch (err) {
    console.log(err);
  }
}

async function affichesocket(data) {
  try {
    console.log("kkkk" + JSON.stringify(data));
    const j1 = await Joueur.findById(data.id1);
    const j2 = await Joueur.findById(data.id2);

    r = { j1: j1, j2: j2 };
    return r;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  add,
  getall,
  getbyid,
  deletebyid,
  attaque,
  addpartie,
  addpartiesocket,
  affichesocket,
};
