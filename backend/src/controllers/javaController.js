const JavaQuestion = require("../models/javaQuestion");

const createJavaQuestion = async (req, res) => {
  try {
    const JavaQuestionObj = {
      title: req.body.title,
      answer: req.body.answer,
      difficulty: req.body.difficulty,
    };
    const response = await JavaQuestion.create(JavaQuestionObj);
    return res.status(201).send({
      message: "sucessfully created JavaQuestion",
      data: response,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Internal server error",
      error: error,
    });
  }
};
const updateJavaQuestion = async (req, res) => {
  try {
    const JavaQuestionId = req.params.id;
    const { title, answer, difficulty } = req.body;
    const JavaQuestion = await JavaQuestion.findById(JavaQuestionId);
    if (!JavaQuestion) {
      return res.status(404).send({
        error: "JavaQuestion not found",
      });
    }
    JavaQuestion.title = title;
    (JavaQuestion.answer = answer), (JavaQuestion.difficulty = difficulty);
    const updatedJavaQuestion = await JavaQuestion.save();
    return res.status(203).send({
      message: "sucessfully JavaQuestion updated",
      data: updatedJavaQuestion,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Internal server error",
      error: error,
    });
  }
};
const getAllJavaQuestions = async (req, res) => {
  try {
    const JavaQuestions = await JavaQuestion.find();
    return res.status(200).send({
      message: "sucessfully fetched",
      data: JavaQuestions,
    });
  } catch (error) {
    return res.status(500).send({
      message: "INTERNAL SERVER ERROR",
      error: error,
    });
  }
};
const getJavaQuestions = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 20;
    const skip = (page - 1) * limit;
    const JavaQuestions = await JavaQuestion.find().skip(skip).limit(limit);
    return res.status(200).send({
      message: "sucessfully fetched",
      data: JavaQuestions,
    });
  } catch (error) {
    return res.status(500).send({
      message: "INTERNAL SERVER ERROR",
      error: error,
    });
  }
};
const deleteJavaQuestion = async (req, res) => {
  try {
    const JavaQuestionId = req.params.id;
    const JavaQuestion = await JavaQuestion.findByIdAndDelete(JavaQuestionId);
    if (!JavaQuestion) {
      return res.status(404).send({
        error: "JavaQuestion not found",
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
  createJavaQuestion,
  updateJavaQuestion,
  getAllJavaQuestions,
  getJavaQuestions,
  deleteJavaQuestion,
};
