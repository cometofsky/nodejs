/**
 * **EVENT Create - START** *
var events = require('events');


var myEmitter = new events.EventEmitter();


myEmitter.on('myEvent', function(msg) {
    console.log(msg);
});


myEmitter.emit('myEvent', 'hello rafi');

* **EVENT Create - END** *
**/


/**
 * **EVENT HOOK - START** *
var events = require('events');
var util = require('util');


var Person = function(name) {
    this.name = name;
};


util.inherits(Person, events.EventEmitter);


var rafi = new Person('rafi');
var rafi2 = new Person('rafi2');


var people = [
    rafi, rafi2
];


people.forEach(function(value) {
    value.on('speak', function(speech) {
        console.log(value.name + ' said: ' + speech)
    });
});


rafi.emit('speak', 'bismillah');
rafi2.emit('speak', 'bismillah');


* **EVENT HOOK - END** *
**/


/**
 * **READING & WRITING A FILE - START** *
var fs = require('fs');


//fs.readFileSync() && fs.writeFileSync for asynchronous behaviour
fs.readFile('readme.md', 'utf8', function(err, data) {
    fs.writeFile('readme.md2', data);
});


* **READING & WRITING A FILE - END** *
**/


/**
 * CREATING & DELETING***- START* *
 */
/*var fs = require('fs');

//fs.mkdirSync('deleting');
//fs.rmdirSync() for synchronous behaviour
fs.mkdir('deleting', function() {
    fs.readFile('readme.md', 'utf8', function(err, data) {
        fs.writeFile('./deleting/readme.md', data);
    });
});
fs.unlink('./deleting/readme.md', function() {
    fs.rmdir('deleting');
});*/
 /*
 * CREATING & DELETING***- END* *
 **/