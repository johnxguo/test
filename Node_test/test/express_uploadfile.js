
var express = require('express');
var app = express();
var fs = require('fs')
var iconv = require('iconv-lite');

var bodyParser = require('body-parser')
var multer = require('multer')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(multer({dest: '/tmp/'}).array('image'))

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.htm');
});

iconv2gbk = (str) => {
    return iconv.encode(str, 'gbk');
}

app.post('/file_upload', function (req, res) {
    console.log(req.files[0])
    var des_file = __dirname + '/' + req.files[0].originalname
    fs.readFile( req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
            if (err) {
                console.log(err);
            } else {
                response = {
                    message: 'File uploaded successfully',
                    filename: req.files[0].originalname
                }
            }

            name = iconv2gbk(req.files[0].originalname);

            console.log(name);
            res.end(name);
        })
    })
})


var server = app.listen(8080, function() {
    var port = server.address().port;
    console.log("server is running on 127.0.0.1:%s", port);
});