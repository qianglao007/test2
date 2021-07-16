const express = require('express');
const app = express();

app.get('/', (req, res) => {
    let openid = req.get('X-CloudBase-Request-Id');
    res.send(`Hello, Welcome to CloudBase!new test openid:${openid}`);
});


const port = process.env.PORT || 80;
app.listen(port, () => {
    console.log('Hello world listening on port', port);
});
