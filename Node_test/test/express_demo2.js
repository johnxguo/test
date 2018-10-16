var express = require('express')
var app = express()

app.get('/', function (req, res) {
    console.log('main page get requset')
    res.send('main page get')
});

app.post('/', function (req, res) {
    console.log('main page post request')
    res.send('main page post')
})

app.get('/user_list', function(req, res) {
    console.log('user_list page get request')
    res.send('user_list page get')
})

app.get('/ab*cd', function(req, res) {
    console.log('ab*cd');
    res.send('正则');
})

var server = app.listen(8080, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址 http:%s:%s", host, port);
});