const JavaScriptQuestion = require("../models/javaScriptQuestion");

const createJavaScriptQuestion = async (req, res) => {
  try {
    const JavaScriptQuestionObj = {
      title: req.body.title,
      answer: req.body.answer,
      difficulty: req.body.difficulty,
    };
    const response = await JavaScriptQuestion.create(JavaScriptQuestionObj);
    return res.status(201).send({
      message: "sucessfully created javaScriptQuestion",
      data: response,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Internal server error",
      error: error,
    });
  }
};
const updateJavaScriptQuestion = async (req, res) => {
  try {
    const JavaScriptQuestionId = req.params.id;
    const { title, answer, difficulty } = req.body;
    const JavaScriptQuestion = await JavaScriptQuestion.findById(JavaScriptQuestionId);
    if (!JavaScriptQuestion) {
      return res.status(404).send({
        error: "JavaScriptQuestion not found",
      });
    }
    JavaScriptQuestion.title = title;
    (JavaScriptQuestion.answer = answer), (JavaScriptQuestion.difficulty = difficulty);
    const updatedJavaScriptQuestion = await JavaScriptQuestion.save();
    return res.status(203).send({
      message: "sucessfully JavaScriptQuestion updated",
      data: updatedJavaScriptQuestion,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Internal server error",
      error: error,
    });
  }
};
const getAllJavaScriptQuestions = async (req, res) => {
  try {
    const JavaScriptQuestions = await JavaScriptQuestion.find();
    return res.status(200).send({
      message: "sucessfully fetched",
      data: JavaScriptQuestions,
    });
  } catch (error) {
    return res.status(500).send({
      message: "INTERNAL SERVER ERROR",
      error: error,
    });
  }
};
const getJavaScriptQuestions = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 20;
    const skip = (page - 1) * limit;
    const JavaScriptQuestions = await JavaScriptQuestion.find().skip(skip).limit(limit);
    return res.status(200).send({
      message: "sucessfully fetched",
      data: JavaScriptQuestions,
    });
  } catch (error) {
    return res.status(500).send({
      message: "INTERNAL SERVER ERROR",
      error: error,
    });
  }
};
const deleteJavaScriptQuestion = async (req, res) => {
  try {
    const JavaScriptQuestionId = req.params.id;
    const JavaScriptQuestion = await JavaScriptQuestion.findByIdAndDelete(JavaScriptQuestionId);
    if (!JavaScriptQuestion) {
      return res.status(404).send({
        error: "JavaScriptQuestion not found",
      });
    }
    return res.status(204).end();
  } catch (error) {
    return res.status(500).send({
      message: "INTERNAL SERVER ERROR",
      error: error,
    });
  }
};
module.exports = {
  createJavaScriptQuestion,
  updateJavaScriptQuestion,
  getAllJavaScriptQuestions,
  getJavaScriptQuestions,
  deleteJavaScriptQuestion,
};
