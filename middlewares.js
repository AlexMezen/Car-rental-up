require("dotenv").config();

module.exports = (req, res, next) => {
  console.log(process.env);
  res.header(
    "Access-Control-Allow-Origin",
    `http://localhost:${process.env.REACT_APP_WEBPACK_URL}`
  );
  next();
};
