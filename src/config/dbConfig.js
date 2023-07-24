const mongoose = require("mongoose");

const username = "codeonlybro";
const password = "YIjtEM3h2xI01I6H"; // Replace this with your actual password
const clusterName = "cluster0.amrmjli.mongodb.net/interview_backendd";

const uri = `mongodb+srv://${encodeURIComponent(username)}:${encodeURIComponent(
  password
)}@${clusterName}?retryWrites=true&w=majority`;

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
