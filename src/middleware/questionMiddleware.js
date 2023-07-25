const validatePage = (req, res, next) => {
  const page = parseInt(req.query.page);
  if (isNaN(page) || page < 1) {
    res.query.page = 1;
  }
  next();
};
const apiKey = "nadeenshaik";
const authenticate = (req, res, next) => {
  const providedApiKey = req.headers["x-api-key"];
  if (providedApiKey !== apiKey) {
    return res.status(401).send({
      error: "Unauthorized",
    });
  }
  next();
};
