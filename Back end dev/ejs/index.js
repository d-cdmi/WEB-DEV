const express = require('express');
const app = express();
const path = require('path');

const port = 8080;
app.set('view engine',"ejs");
app.set("views", path.join(__dirname,'/views')) ;


app.get('/', (req,res )=>{
    res.render('home.ejs');
});
app.get('/iam', (req,res )=>{
    let ran = Math.floor(Math.random() *10)+1;
    res.render('home.ejs',{ran});
});
app.get('/ins/:username', (req,res )=>{
    let follo = ['ran','raj','rakesh','joy','jon']
    let {username } = req.params;
    res.render('instagram.ejs',{username , follo});
});

app.listen(port,() => {
    console.log('port: ' + port);
})