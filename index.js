const express = require('express');
var fs = require('fs');
const axios = require('axios');
const app = express();

app.get('/', (req, res) => {
    let token = fs.readFileSync('/.tencentcloudbase/wx/cloudbase_access_token').toString()
    let openid = req.get('X-WX-OPENID');
    let url = `https://api.weixin.qq.com/wxa/getopendata?openid=${openid}&cloudbase_access_token=${token}`;
    console.log('request url:', url);
    axios.post(url)
        .then(resp => {
            console.log('get response:', resp);
            res.send(resp);
        })
    // res.send(`Hello, Welcome to CloudBase!new test openid:${openid}`);
});


const port = process.env.PORT || 80;
app.listen(port, () => {
    console.log('Hello world listening on port', port);
});
