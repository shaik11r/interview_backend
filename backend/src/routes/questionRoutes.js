const questionController = require("../controllers/questionsController");
const questionMiddleware = require("../middleware/questionMiddleware");
const authMiddleware = require("../middleware/authMiddleware");

const routes = (app) => {
  app.get(
    "/api/react/questions",
    // authMiddleware.isAuthenticated,
    // questionMiddleware.validatePage,
    questionController.getQuestions
  );

  app.get("/api/react/questionsall", questionController.getAllQuestions);

  app.put(
    "/api/react/questions/:id",
    authMiddleware.isAuthenticated,
    questionMiddleware.authenticate,
    questionController.updateQuestion
  );

  app.delete(
    "/api/react/questions/:id",
    authMiddleware.isAuthenticated,
    questionMiddleware.authenticate,
    questionController.deleteQuestion
  );

  app.post("/api/react/questions", authMiddleware.isAuthenticated, questionController.createQuestion);
};
module.exports = routes;
