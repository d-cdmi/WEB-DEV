const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverrde = require("method-override");
const ejsMate = require("ejs-mate");

const MONG_URL = "mongodb://127.0.0.1:27017/wanderlust";
main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONG_URL);
}


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverrde("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));


// root route

app.get("/", (req, res) => {
  res.send("root is workeing");
});


// app.get("/listtest", async (req, res) => {
//   let simpleData = new Listing({
//     title: "my New vill",
//     description: "this is best vill",
//     location: "surat ",
//     price: 8500,
//     country: "india",
//   });
//   await simpleData.save();
//   res.send("data is saved");
// });


// index Routes
app.get("/listings",async (req,res) => {
    const allListing = await Listing.find({});
    res.render("./listings/index.ejs",{allListing})
});


// newPost
app.get("/listings/new",(req,res) => {
    res.render("./listings/new.ejs")
})

// storge the data
app.post("/listings",async(req,res)=>{
    const newList = new Listing(req.body.listing);
    await newList.save();
    res.redirect("/listings");
})
//edit Routes
app.get("/listings/:id/edit",async(req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("./listings/edit.ejs",{listing})
});
//update routes
app.put("/listings/:id",async (req,res) => {
    let {id} = req.params;
    const listing = await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listings/${listing._id}`);
});

// delete route
app.delete("/listings/:id" ,async(req,res) => {
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
})


// Show rotues
app.get("/listings/:id",async (req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    console.log(listing);
    res.render("./listings/show.ejs",{listing})
});


app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
