const { Router } = require("express");
const { registerUser, loginUser } = require("./user.controller");
const { registerUserValidator, loginValidatior } = require("./user.validator");

const router = Router();

router.route("/users").post(registerUserValidator, registerUser);

router.post("/login", loginValidatior, loginUser);

module.exports = router;
