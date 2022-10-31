const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: "string",
  date: "string",
  pw: "string",
  name: "string",
  auth: "string",
});

// Create Model & Export
module.exports = mongoose.model("User", userSchema);
