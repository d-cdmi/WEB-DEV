const mongoose = require("mongoose");

main()
  .then(() => console.log("succ"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amezon");
}

let Schema = new mongoose.Schema({
  name: {
    type: String,
    required:true,
  },
  email: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const Book = mongoose.model("Book", Schema);

let book1 = new Book({
    name:"dhruvish  ",
    email:"dhruvish@gamil.com",
    age:"18",
})


book1.save().then(reul =>{console.log(reul)})