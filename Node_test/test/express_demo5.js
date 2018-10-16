var express = require('express');
var app = express();
var bodyparser = require('body-parser')

var urlencodedParse = bodyparser.urlencoded({extended:false})

app.use(express.static('public'))

app.get('/index.htm', function (req, res) {
    console.log(__dirname);
    res.sendfile(__dirname + "/" + "index.htm")
});

app.get('/', function (req, res) {
    console.log(__dirname);
    res.sendfile(__dirname + "/" + "index.htm")
});

app.post('/process_post', urlencodedParse,  function (req, res) {
    var response = { 
        'sealsjson':req.body.sealsjson
    }

    console.log(response)
    res.end(JSON.stringify(response))
})

var server = app.listen(8080, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址 http://%s:%s", host, port)
});
