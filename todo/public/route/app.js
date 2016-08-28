var http = require('http');
var fs = require('fs');


var server = http.createServer(function(rqst, rspns) {

    rspns.writeHead(200, {
        'Content-Type': 'text/html'
    });

    if (rqst.url === '/home' || rqst.url === '/') {
        fs.createReadStream('./serve-html/index.html').pipe(rspns);
    }
    else if (rqst.url === '/contact') {
        rspns.end('nothing here');
    }
});


server.listen(3000, '127.0.0.1');
console.log('listening to port 3000');