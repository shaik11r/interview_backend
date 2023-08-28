const NodeQuestion = require("../models/NodeQuestion");

const createNodeQuestion = async (req, res) => {
  try {
    const NodeQuestionObj = {
      title: req.body.title,
      answer: req.body.answer,
      difficulty: req.body.difficulty,
    };
    const response = await NodeQuestion.create(NodeQuestionObj);
    return res.status(201).send({
      message: "sucessfully created NodeQuestion",
      data: response,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Internal server error",
      error: error,
    });
  }
};
const updateNodeQuestion = async (req, res) => {
  try {
    const NodeQuestionId = req.params.id;
    const { title, answer, difficulty } = req.body;
    const NodeQuestion = await NodeQuestion.findById(NodeQuestionId);
    if (!NodeQuestion) {
      return res.status(404).send({
        error: "NodeQuestion not found",
      });
    }
    NodeQuestion.title = title;
    (NodeQuestion.answer = answer), (NodeQuestion.difficulty = difficulty);
    const updatedNodeQuestion = await NodeQuestion.save();
    return res.status(203).send({
      message: "sucessfully NodeQuestion updated",
      data: updatedNodeQuestion,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Internal server error",
      error: error,
    });
  }
};
const getAllNodeQuestions = async (req, res) => {
  try {
    const NodeQuestions = await NodeQuestion.find();
    return res.status(200).send({
      message: "sucessfully fetched",
      data: NodeQuestions,
    });
  } catch (error) {
    return res.status(500).send({
      message: "INTERNAL SERVER ERROR",
      error: error,
    });
  }
};
const getNodeQuestions = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 20;
    const skip = (page - 1) * limit;
    const NodeQuestions = await NodeQuestion.find().skip(skip).limit(limit);
    return res.status(200).send({
      message: "sucessfully fetched",
      data: NodeQuestions,
    });
  } catch (error) {
    return res.status(500).send({
      message: "INTERNAL SERVER ERROR",
      error: error,
    });
  }
};
const deleteNodeQuestion = async (req, res) => {
  try {
    const NodeQuestionId = req.params.id;
    const NodeQuestion = await NodeQuestion.findByIdAndDelete(NodeQuestionId);
    if (!NodeQuestion) {
      return res.status(404).send({
        error: "NodeQuestion not found",
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
  createNodeQuestion,
  updateNodeQuestion,
  getAllNodeQuestions,
  getNodeQuestions,
  deleteNodeQuestion,
};
