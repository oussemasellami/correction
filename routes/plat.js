const express = require("express");
const router = express.Router();
const platcontroller = require("../controller/platcontroller");
const validate = require("../middl/validate");
router.post("/addplat", platcontroller.add);
router.get("/show", platcontroller.show);
router.put("/update/:id", platcontroller.update);
router.delete("/delete/:id", platcontroller.deleteplat);

module.exports = router;
