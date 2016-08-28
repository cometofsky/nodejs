var http = require('http');


var server = http.createServer(function(rqst, rspns) {


    console.log(rqst.url);
    rspns.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    rspns.end('');
});


server.listen(3000, '127.0.0.1');
console.log('listening to port 3000');