const { check, validationResult } = require("express-validator");
const validateResult = require("../../middlewares/validator.middleware");

const registerUserValidator = [
  check("names", "Error con names")
    .exists()
    .withMessage("No se incluye la propiedad names")
    .notEmpty()
    .withMessage("names no debe estar vacio")
    .isString()
    .withMessage("El valor de names debe ser string")
    .isLength({ min: 2, max: 50 })
    .withMessage("La longitud de names debe ser entre 2 y 50 caracteres")
    .matches(/^[a-zA-Z\s]/)
    .withMessage("El names solo acepta letras"),
  check("surnames", "Error con surnames")
    .exists()
    .withMessage("No se incluye la propiedad surnames")
    .notEmpty()
    .withMessage("surnames no debe estar vacio")
    .isString()
    .withMessage("El valor del surnames debe ser string")
    .isLength({ min: 2, max: 50 })
    .withMessage("La longitud de surnames de ser entre 2 y 50 caracteres")
    .matches(/^[a-zA-Z\s]/)
    .withMessage("surnames solo acepta letras"),
  check("email", "Error con el campo email")
    .exists()
    .withMessage("La propiedad email no esta incluida")
    .notEmpty()
    .withMessage("La propiedad email no debe estar vacia")
    .isString()
    .withMessage("La propiedad email debe ser string")
    .isEmail()
    .withMessage("La propiedad email no tiene el formato de correo")
    .isLength({ min: 7, max: 80 })
    .withMessage("El email debe ser minimo 7 y máximo 80 caracteres"),
  check("password", "Error en el campo password")
    .exists()
    .withMessage("La propiedad password no esta incluida")
    .notEmpty()
    .withMessage("La propiedad password no debe estar vacia")
    .isString()
    .withMessage("La propiedad email debe ser string"),
  check("sedeId", "Error la propiedad sedeId")
    .exists()
    .withMessage("No se incluye el id de la sede")
    .notEmpty()
    .withMessage("El campo sedeId no debe estar vacio")
    .isInt()
    .withMessage("El valor del campo sedeId debe ser numero entero"),
  validateResult,
];

const loginValidatior = [
  check("email", "Error con la propiedad email")
    .exists()
    .withMessage("La propiedad email no esta incluida")
    .notEmpty()
    .withMessage("La propiedad email no debe estar vacia")
    .isString()
    .withMessage("La propiedad email debe ser string")
    .isEmail()
    .withMessage("La propiedad email no tiene el formato de correo"),
  check("password", "Error en el campo password")
    .exists()
    .withMessage("La propiedad password no esta incluida")
    .notEmpty()
    .withMessage("La propiedad password no debe estar vacia")
    .isString()
    .withMessage("La propiedad email debe ser string"),
  validateResult,
];

module.exports = {
  registerUserValidator,
  loginValidatior,
};
