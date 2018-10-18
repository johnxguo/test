var http = require('http')

var options = {
    host: 'localhost',
    port: '8080',
    path: '/index.htm'
}

var callback = function (response) {
    var body = ''
    response.on('data', (data) => {
        console.log('1')
        body += data
    })

    console.log('2')

    response.on('end', () => {
        console.log('3')
        //console.log(body)
    })
    console.log(response.body)
}

console.log('a')
var req = http.request(options, callback)
console.log('b')
req.end()