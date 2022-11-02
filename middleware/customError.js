const customError = (param, msg) => {
  return {
    value: 9,
    msg,
    param: param,
    location: "body",
  };
};
