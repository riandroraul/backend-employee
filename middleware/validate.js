const { validationResult } = require("express-validator");

const validateAddUser = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
};

// const myValidationResult = validationResult.withDefaults({
//   formatter: (error) => {
//     return {
//       name: error.param,
//       location: error.location,
//     };
//   },
// });
// const validateAddUser = (req, res, next) => {
//   const errors = myValidationResult(req).array();
//   if (errors.length > 0) {
//     return res.status(422).json(errors);
//   }

//   next();
// };
module.exports = validateAddUser;
