const mongoose = require("mongoose");
require("dotenv").config();
console.log(process.env.PASSWORD);
const username = "codeonlybro";
const password = "YIjtEM3h2xI01I6H"; // Replace this with your actual password
const clusterName = "cluster0.amrmjli.mongodb.net/interview_backendd";

const uri = `mongodb+srv://${encodeURIComponent(process.env.DBUSERNAME)}:${encodeURIComponent(process.env.PASSWORD)}@${
  process.env.CLUSTERNAME
}?retryWrites=true&w=majority`;

async function connectToDb() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connecting...");
  } catch (err) {
    console.log(err);
  }
}
module.exports = {
  connectToDb,
};
