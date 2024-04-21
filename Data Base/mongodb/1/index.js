const mongoose = require("mongoose");

main()
  .then(() => console.log("succ"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

let Schema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

let User = mongoose.model("User", Schema);


User.findByIdAndDelete("661d3a3223772621897f97e8")
.then(reu =>{
    console.log(reu)
})






// User.findOneAndUpdate({name:"Tony"},{age:10},{new:true})
// .then(reu =>{
//     console.log(reu)
// })
// .catch(err =>{
//     console.log(err)
// });
// User.findById("661d3b3780b95f8f972e5d9e")
// .then(reu =>{
//     console.log(reu)
// })
// .catch(err =>{
//     console.log(err)
// });

// User.insertMany([
//     {name:"Tony",email:"tony@gmail.com",age:85},
//     {name:"Pitar",email:"pitar@gmail.com",age:35},
//     {name:"ABC",email:"abc@gmail.com",age:15},
// ]).then(reu =>{
//     console.log(reu)
// })

// let user1 = new User({
//     name: "John",
//     email: "john.c.calhoun@examplepetstore.com",
//     age: 21,
// });

// user1.save();
