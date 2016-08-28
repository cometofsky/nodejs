var http = require('http');
var fs = require('fs');


var stream = fs.createReadStream(__dirname + '/readme.md', 'utf8');
var writeStream = fs.createWriteStream(__dirname + '/writeme.md');


//createReadStream is inherited from EventEmitter, where "data" is an event
//which emits/fires whenever a data(chunk of data) is received, and we do not
//need to emit it manually
stream.on('data', function(chunk) {

    writeStream.write(chunk);
});