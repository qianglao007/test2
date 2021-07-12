const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('Hello world received a requestxxx.');

    res.send(`Hello, Welcome to CloudBase!23333444`);
});


const port = process.env.PORT || 80;
app.listen(port, () => {
    console.log('Hello world listening on port', port);
});
