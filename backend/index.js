const express = require("express");
const { default: mongoose } = require("mongoose");
const { connectToDb } = require("./src/config/dbConfig");
const cors = require("cors");
const app = express();
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./src/routes/authrouter")(app);
require("./src/routes/questionRoutes")(app);
require("./src/routes/nodeRouter")(app);
require("./src/routes/javaScript")(app);
require("./src/routes/javaRouter")(app);
app.get("/", (req, res) => {
  res.send("hi from the server");
});

app.listen(process.env.PORT, async () => {
  console.log(`Server started on Port ${process.env.PORT}`);
  try {
    await connectToDb();
    console.log("sucessfully connected to mongodb");
  } catch (err) {
    console.log("unable to connect to mongodb", err);
  }
});
