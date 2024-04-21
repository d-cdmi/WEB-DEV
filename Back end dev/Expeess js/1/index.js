const express = require('express');
const app = express();

let port = 800;

app.listen(port,() => {
    console.log('listening on port ' + port);
});

app.get('/', function(req, res){
    res.send('index.html');
});
app.get('/search', function(req, res){
    let { q ,id } = req.query;
    res.send(`<b>hello ${q }</b>`);
});

// app.get('/:username', function(req, res){
//     res.send(`this is ${req.params.username}`);
// });

// app.get('/dhruvish', function(req, res){
//     res.send('Dhruvish');
// });
// app.get('/lathiya', function(req, res){
//     res.send('Lathiya');
// });
// app.get('/hello', function(req, res){
//     res.send('hello welcome the surat in gujrat');
// });
// app.get('*', function(req, res){
//     res.send('404');
// });

// app.post('/', function(req, res){
//     res.send("THis is post request");
// }) 


// app.use((req,res)=> {
//     console.log('listening on   port ' + port );
//     res.send("<b>Hello, world!</b>");
// })