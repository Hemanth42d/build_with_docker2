const mongoose = require("mongoose");

const connection = mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("DB Connected"))
  .catch((error) => console.log(error.message));

module.exports = connection;
