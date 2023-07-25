const mongoose = require("mongoose");
require("dotenv").config();

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
