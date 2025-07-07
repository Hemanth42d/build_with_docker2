require("dotenv").config();
const express = require("express");
const db = require("./config/mongoose-connection");
const bodyParser = require("body-parser");
const tasksRouter = require("./routes/tasks");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.use("/", tasksRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
