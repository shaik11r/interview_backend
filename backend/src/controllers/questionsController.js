const Question = require("../models/questionModel");

const createQuestion = async (req, res) => {
  try {
    const questionObj = {
      title: req.body.title,
      answer: req.body.answer,
      difficulty: req.body.difficulty,
      source: req.body.source || "",
    };
    const response = await Question.create(questionObj);
    return res.status(201).send({
      message: "sucessfully created Question",
      data: response,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Internal server error",
      error: error,
    });
  }
};
const updateQuestion = async (req, res) => {
  try {
    const questionId = req.params.id;
    const { title, answer, difficulty } = req.body;
    const question = await Question.findById(questionId);
    if (!question) {
      return res.status(404).send({
        error: "question not found",
      });
    }
    question.title = title;
    (question.answer = answer), (question.difficulty = difficulty);
    const updatedQuestion = await Question.save();
    return res.status(203).send({
      message: "sucessfully question updated",
      data: updatedQuestion,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Internal server error",
      error: error,
    });
  }
};
const getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    return res.status(200).send({
      message: "sucessfully fetched",
      data: questions,
    });
  } catch (error) {
    return res.status(500).send({
      message: "INTERNAL SERVER ERROR",
      error: error,
    });
  }
};
const getQuestions = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 20;
    const skip = (page - 1) * limit;
    const questions = await Question.find().skip(skip).limit(limit);
    return res.status(200).send({
      message: "sucessfully fetched",
      data: questions,
    });
  } catch (error) {
    return res.status(500).send({
      message: "INTERNAL SERVER ERROR",
      error: error,
    });
  }
};
const deleteQuestion = async (req, res) => {
  try {
    const questionId = req.params.id;
    const question = await Question.findByIdAndDelete(questionId);
    if (!question) {
      return res.status(404).send({
        error: "question not found",
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
  createQuestion,
  updateQuestion,
  getAllQuestions,
  getQuestions,
  deleteQuestion,
};
