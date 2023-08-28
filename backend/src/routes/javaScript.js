const questionController = require("../controllers/javaScriptController");
const questionMiddleware = require("../middleware/questionMiddleware");
const authMiddleware = require("../middleware/authMiddleware");

const routes = (app) => {
  app.get(
    "/api/javaScript/questions",
    // authMiddleware.isAuthenticated,
    // questionMiddleware.validatePage,
    questionController.getJavaScriptQuestions
  );

  app.get("/api/javaScript/questionsall", questionController.getAllJavaScriptQuestions);

  app.put(
    "/api/javaScript/questions/:id",
    authMiddleware.isAuthenticated,
    questionMiddleware.authenticate,
    questionController.updateJavaScriptQuestion
  );

  app.delete(
    "/api/javaScript/questions/:id",
    authMiddleware.isAuthenticated,
    questionMiddleware.authenticate,
    questionController.deleteJavaScriptQuestion
  );

  app.post("/api/javaScript/questions", questionController.createJavaScriptQuestion);
};
module.exports = routes;
