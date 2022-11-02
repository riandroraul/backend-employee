const errors = [
  {
    value: 9,
    msg: "name must contain letter",
    param: "Name",
    location: "body",
  },
  {
    value: "",
    msg: "email is required",
    param: "Email",
    location: "body",
  },
  {
    value: "",
    msg: "email must be valid",
    param: "Email",
    location: "body",
  },
  {
    value: "",
    msg: "mobile number is required",
    param: "Mobile",
    location: "body",
  },
  {
    value: "",
    msg: "mobile number must be valid",
    param: "Mobile",
    location: "body",
  },
  {
    value: "",
    msg: "Invalid value",
    param: "Mobile",
    location: "body",
  },
  {
    value: "",
    msg: "address is required",
    param: "Address",
    location: "body",
  },
  {
    value: "",
    msg: "address must be letters or number",
    param: "Address",
    location: "body",
  },
];

const errorName = [];
errors.find((e) => {
  if (e.param === "Name") {
    errorName.push(e);
  }
});
const errorMobile = [];
errors.find((e) => {
  if (e.param === "Mobile") {
    errorMobile.push(e);
  }
});
const errorAddress = [];
errors.find((e) => {
  if (e.param === "Address") {
    errorAddress.push(e);
  }
});
console.log(errorName);
console.log(errorMobile);
console.log(errorAddress);
