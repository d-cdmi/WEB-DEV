const mongoose = require("mongoose");
const Chat = require("./moduls/chat.js");
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

  [{ from: "Raj",to: "ram",message: "hello how are you ?",create_at: new Date() },{from: "User1",to: "User2",message: "Hello, how are you?",create_at: new Date()},{from: "User2",to: "User3",message: "I'm good, thanks! And you?",create_at: new Date(),}]
  {
    from: "User3",
    to: "User1",
    message: "Hey, I'm doing well!",
    create_at: new Date(),
  },
  {
    from: "Raj",
    to: "ram",
    message: "hello how are you?",
    create_at: new Date(),
  },
  {
    from: "Raj",
    to: "ram",
    message: "hello how are you?",
    create_at: new Date(),
  },
  {
    from: "ram",
    to: "Raj",
    message: "I'm doing well, thanks!",
    create_at: new Date(),
  },
  {
    from: "Raj",
    to: "ram",
    message: "That's great to hear!",
    create_at: new Date(),
  },
  {
    from: "Alice",
    to: "Bob",
    message: "Hi Bob, how are you?",
    create_at: new Date(),
  },
  {
    from: "Bob",
    to: "Alice",
    message: "I'm doing well, thanks! And you?",
    create_at: new Date(),
  },
  {
    from: "Alice",
    to: "Bob",
    message: "I'm good too, thanks!",
    create_at: new Date(),
  },
  {
    from: "Bob",
    to: "Alice",
    message: "Great! What are you up to?",
    create_at: new Date(),
  },
  {
    from: "Alice",
    to: "Bob",
    message: "Just working on some stuff. How about you?",
    create_at: new Date(),
  },
  {
    from: "Alice",
    to: "Bob",
    message: "Hi Bob, how are you?",
    create_at: new Date(),
  },
  {
    from: "Charlie",
    to: "Dave",
    message: "Hi Dave, how are you?",
    create_at: new Date(),
  },
  {
    from: "Eve",
    to: "Frank",
    message: "Hi Frank, how are you?",
    create_at: new Date(),
  },
  {
    from: "Frank",
    to: "Eve",
    message: "I'm doing well, thanks! And you?",
    create_at: new Date(),
  },
  {
    from: "Eve",
    to: "Frank",
    message: "I'm good too, thanks!",
    create_at: new Date(),
  },
  {
    from: "Frank",
    to: "Eve",
    message: "Great! What are you up to?",
    create_at: new Date(),
  },
  {
    from: "Eve",
    to: "Frank",
    message: "Just working on some stuff. How about you?",
    create_at: new Date(),
  },



let chat1 = new Chat({
  from: "Raj",
  to: "ram",
  message: "hello how are you ?",
  create_at: new Date(),
});

chat1.save().then((reu) => {
  console.log(reu);
});

