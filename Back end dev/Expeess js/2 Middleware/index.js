const express = require("express");
const app = express();

app.use("/about",(req,res,next) =>{
    console.log("middler ware called");
    next();
})

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});
app.get("/get",(req,res) => {
    process.exit(0);
});
app.use((req,res) => {
    console.log("last middal ware");
    res.send("404 file is not found")
})
app.listen(8080, (req, res) => {
  console.log("Server is running on port 8080");
});
