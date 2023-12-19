const express = require("express");
const router = express.Router();
const serveurController = require("../controller/serveurcontroller");
const validate = require("../middl/validate");
router.post("/nouveauserveur", validate, serveurController.add);
router.get("/getAllServeur", serveurController.getall);
router.get("/getserveur/:id", serveurController.getbyid);
router.delete("/deleteServeur/:id", serveurController.deletebyid);
//router.put("/attaque/:id1/:id2", joueurController.attaque);
//router.post("/addpartie/:id1/:id2", joueurController.addpartie);
router.get("/plat", (req, res, next) => {
  res.render("plat");
});
module.exports = router;
