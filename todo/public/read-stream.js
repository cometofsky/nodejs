var http = require('http');
var fs = require('fs');


var stream = fs.createReadStream(__dirname + '/readme.md', 'utf8');


//createReadStream is inherited from EventEmitter, where "data" is an event
//which emits/fires whenever a data(chunk of data) is received, and we do not
//need to emit it manually
stream.on('data', function(chunk) {

    console.log('new chunk');
    console.log(chunk);
});


/**
var server = http.createServer(function(rqst, rspns) {


    console.log(rqst.url);
    rspns.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    rspns.end('');
});


server.listen(3000, '127.0.0.1');
console.log('listening to port 3000');
**/