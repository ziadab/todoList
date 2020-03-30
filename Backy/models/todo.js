const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  content: {
    required: true,
    type: String,
    trim: true
  }
});

const ToDo = mongoose.model("ToDo", todoSchema);

module.exports = ToDo;
