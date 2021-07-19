const express = require('express');
var fs = require('fs');
const axios = require('axios');
const app = express();

app.get('/', (req, res) => {
    let openid = req.get('X-WX-OPENID');
    let url = `https://zstdev.qq.com/v1/platform/mini-program/home`;
    axios.post(url, {})
        .then(resp => {
            console.log('get response:', resp);
            res.send(resp);
        })
});


const port = process.env.PORT || 80;
app.listen(port, () => {
    console.log('listening on port', port);
});


// function test() {
//     let obj1 = {
//     };
//     let obj2 = {
//         b: obj1
//     };
//     obj1.a = obj2;
//     console.log(obj1);
// }
// test();
