const mongoose = require("mongoose");
const JavaScriptQuestionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  dislikes: {
    type: Number,
    default: 0,
  },
});
const JavaScriptQuestion = mongoose.model("JavaScriptQuestion", JavaScriptQuestionSchema);
module.exports = JavaScriptQuestion;
