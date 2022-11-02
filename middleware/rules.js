const { check } = require("express-validator");

const rules = [
  check("Name")
    .notEmpty()
    .withMessage("name is required")
    .isString()
    .withMessage("name must contain letter")
    .matches(/^[A-Za-z0-9 .,'!&]+$/)
    .withMessage("name must be letters")
    .trim()
    .escape(),
  check("Email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("email must be valid")
    .normalizeEmail()
    .trim()
    .escape(),
  check("Mobile")
    .notEmpty()
    .withMessage("mobile number is required")
    .isMobilePhone("id-ID")
    .withMessage("mobile number must be valid")
    .isLength({ min: 11, max: 15 })
    .trim()
    .escape(),
  check("Birthdate")
    .notEmpty()
    .withMessage("Birthdate is required")
    .isISO8601()
    .toDate(),
  check("Address")
    .notEmpty()
    .withMessage("address is required")
    .isString()
    .withMessage("address must contain letter")
    .matches(/^[A-Za-z0-9 .,'!&]+$/)
    .withMessage("address must be letters or number")
    .trim()
    .escape(),
];

module.exports = rules;
