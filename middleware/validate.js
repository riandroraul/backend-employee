const { validationResult } = require("express-validator");

const validateAddUser = (req, res, next) => {
  const errors = validationResult(req);
  const errorFormatter = ({ location, msg, param, value }) => {
    // Build your resulting errors however you want! String, object, whatever - it works!
    const error = {
      value: value,
      msg: msg,
      param: param,
      location: location,
    };
    return error;
  };
  const result = validationResult(req).formatWith(errorFormatter);
  if (!result.isEmpty()) {
    // Response will contain something like
    // { errors: [ "body[password]: must be at least 10 chars long" ] }
    return res.status(422).json(result.array());
    // const {value, msg, param, location} = errors
    // if (!errors.isEmpty()) {
    //   return res.status(422).json({ errors: errors.array() });
  }
  next();
};

// {
//   "value": "+62",
//   "msg": [
//     "mobile number must be valid",
//     "Invalid value"
//    ],
//   "param": "Mobile",
//   "location": "body"
// },

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
