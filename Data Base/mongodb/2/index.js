const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./moduls/chat.js");
const { render } = require("ejs");
const methodeOverr = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodeOverr("_method"));

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// let chat1 = new Chat({
//   from: "Raj",
//   to: "ram",
//   message: "hello how are you ?",
//   create_at: new Date(),
// });

// chat1.save().then((reu) => {
//   console.log(reu);
// });

//routing

app.get("/", (req, res) => {
  res.send(" ");
});

app.get("/show", async (req, res) => {
  let Chats = await Chat.find({});
  res.render("index.ejs", { Chats });
});

app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/chats", (req, res) => {
  let { from, to, message } = req.body;
  let chat = new Chat({
    from: from,
    to: to,
    message: message,
    create_at: new Date(),
  });
  chat
    .save()
    .then((reu) => {
      console.log(reu);
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(chat);
    res.redirect("/show");
});


app.get("/chats/:id/edit",async (req,res) =>{
  let {id} = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs",{chat})
})

app.put("/chats/:id",async (req,res) => {
  let {id} = req.params;
  let {meassge:newMessage} =req.body;
  console.log(newMessage)
  let chat = await Chat.findByIdAndUpdate(id,{message:newMessage});
  console.log(chat)
  res.redirect("/show");
})

app.delete("/chats/:id",async (req,res ) => {
  let {id} = req.params;
  let chat = await Chat.findByIdAndDelete(id);
  console.log(chat);
  res.redirect('/show')
})


app.listen(8080, () => {
  console.log("Your server is Listening");
});
