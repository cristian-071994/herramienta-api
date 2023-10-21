const { Router } = require("express");
const { registerUser } = require("./user.controller");

const router = Router();

router.route("/users").post(registerUser);

module.exports = router;
