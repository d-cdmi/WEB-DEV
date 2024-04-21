const express = require('express');
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/submit', (req, res) => {
    let { username } = req.query;
    res.send(`hello ${username}`);
});

app.post('/submit', async (req, res) => {
    let { username, pwd } = req.body;
    res.send(`hello POST ${username}`);
});