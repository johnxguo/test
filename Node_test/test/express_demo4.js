var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/index.htm', function (req, res) {
    console.log(__dirname);
    res.sendfile(__dirname + "/" + "index.htm")
});

app.get('/process_get', function (req, res) {
    var response = {
        'sealsjson':req.query.sealsjson
    }

    console.log(response)
    res.end(JSON.stringify(response))
})

var server = app.listen(8080, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址 http://%s:%s", host, port)
});
