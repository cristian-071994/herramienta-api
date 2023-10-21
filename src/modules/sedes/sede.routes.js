const { Router } = require("express");
const { registerSede } = require("./sede.controller");

const router = Router();

router.route("/sedes").post(registerSede);

module.exports = router;
