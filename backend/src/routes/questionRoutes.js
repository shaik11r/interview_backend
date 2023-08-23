const questionController = require("../controllers/questionsController");
const questionMiddleware = require("../middleware/questionMiddleware");
const authMiddleware = require("../middleware/authMiddleware");

const routes = (app) => {
  app.get(
    "/api/questions",
    // authMiddleware.isAuthenticated,
    // questionMiddleware.validatePage,
    questionController.getQuestions
  );

  app.get("/api/questionsall", questionController.getAllQuestions);

  app.put(
    "/api/questions/:id",
    authMiddleware.isAuthenticated,
    questionMiddleware.authenticate,
    questionController.updateQuestion
  );

  app.delete(
    "/api/questions/:id",
    authMiddleware.isAuthenticated,
    questionMiddleware.authenticate,
    questionController.deleteQuestion
  );

  app.post("/api/questions", authMiddleware.isAuthenticated, questionController.createQuestion);
};
module.exports = routes;
