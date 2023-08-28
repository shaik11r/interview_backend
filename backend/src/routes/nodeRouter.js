const questionController = require("../controllers/nodeController");
const questionMiddleware = require("../middleware/questionMiddleware");
const authMiddleware = require("../middleware/authMiddleware");

const routes = (app) => {
  app.get(
    "/api/node/questions",
    // authMiddleware.isAuthenticated,
    // questionMiddleware.validatePage,
    questionController.getNodeQuestions
  );

  app.get("/api/node/questionsall", questionController.getAllNodeQuestions);

  app.put(
    "/api/node/questions/:id",
    authMiddleware.isAuthenticated,
    questionMiddleware.authenticate,
    questionController.updateNodeQuestion
  );

  app.delete(
    "/api/node/questions/:id",
    authMiddleware.isAuthenticated,
    questionMiddleware.authenticate,
    questionController.deleteNodeQuestion
  );

  app.post("/api/node/questions", questionController.createNodeQuestion);
};
module.exports = routes;
