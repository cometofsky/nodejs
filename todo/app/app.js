var express = require('express');
var todoController = require(__dirname + '/controllers/todoController');

var app = express();

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static(__dirname + '/public/assets'));


//fire controllers
todoController(app);


//listen to port
app.listen(3000);