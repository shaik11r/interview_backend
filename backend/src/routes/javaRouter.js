const questionController = require("../controllers/javaController");
const questionMiddleware = require("../middleware/questionMiddleware");
const authMiddleware = require("../middleware/authMiddleware");

const routes = (app) => {
  app.get(
    "/api/java/questions",
    // authMiddleware.isAuthenticated,
    // questionMiddleware.validatePage,
    questionController.getJavaQuestions
  );

  app.get("/api/java/questionsall", questionController.getAllJavaQuestions);

  app.put(
    "/api/java/questions/:id",
    authMiddleware.isAuthenticated,
    questionMiddleware.authenticate,
    questionController.updateJavaQuestion
  );

  app.delete(
    "/api/java/questions/:id",
    authMiddleware.isAuthenticated,
    questionMiddleware.authenticate,
    questionController.deleteJavaQuestion
  );

  app.post("/api/java/questions", questionController.createJavaQuestion);
};
module.exports = routes;
