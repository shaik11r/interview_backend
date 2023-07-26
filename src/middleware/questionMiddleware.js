require("dotenv").config();
const validatePage = (req, res, next) => {
  const page = parseInt(req.query.page);
  if (isNaN(page) || page < 1) {
    res.query.page = 1;
  }
  next();
};

const authenticate = (req, res, next) => {
  const providedApiKey = req.headers["x-api-key"];
  if (providedApiKey !== process.env.APIKEY) {
    return res.status(401).send({
      error: "Unauthorized",
    });
  }
  next();
};
module.exports = {
  authenticate,
  validatePage,
};
