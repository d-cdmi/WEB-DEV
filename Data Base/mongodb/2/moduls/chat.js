const mongoose = require("mongoose");

const ChatSem = mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  message: {
    type: String,
  },
  create_at: {
    type: Date,
    required: true,
  },
});

const Chat = mongoose.model("Chat", ChatSem);

module.exports = Chat;