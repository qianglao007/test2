const express = require('express');
var fs = require('fs');
const axios = require('axios');
const app = express();

app.get('/', (req, res) => {
    let token = fs.readFileSync('/.tencentcloudbase/wx/cloudbase_access_token').toString()
    let openid = req.get('X-WX-OPENID');
    let url = `http://openapi-965928-1304825688.ap-shanghai.internal-run.tcloudbase.com/wxa/getwxadevinfo`;
    console.log('request url:', url);
    axios.post(url)
        .then(resp => {
            // res.send(resp);
            res.send(resp.data);
        })
});


const port = process.env.PORT || 80;
app.listen(port, () => {
    console.log('listening on port', port);
});
