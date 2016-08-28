var http = require('http');
var fs = require('fs');


var server = http.createServer(function(rqst, rspns) {


    console.log(rqst.url);
    rspns.writeHead(200, {
        'Content-Type': 'application/json'
    });

    var obj = {
        name: 'rafi',
        job: 'none',
        age: 27
    };
    rspns.end(JSON.stringify(obj));
});


server.listen(3000, '127.0.0.1');
console.log('listening to port 3000');