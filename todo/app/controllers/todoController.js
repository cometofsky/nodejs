var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connect to the database
mongoose.connect('mongodb://rafi:999ubuntu999@ds019886.mlab.com:19886/rafi-node-todo');

//Create schema
var todoSchema = new mongoose.Schema({
    item: String
});

var Todo = mongoose.model('todo', todoSchema);


var urlEncodedParser = bodyParser.urlencoded({extended: false});

module.exports = function (app) {


    app.get('/todo', function(req, res) {


        //get data from mongodb and pass it to view
        Todo.find({}, function(err, data) {
            if (err) throw err;

            res.render('todo', {
                todos: data
            });
        });
    });

    
    app.post('/todo', urlEncodedParser, function(req, res) {

        //get data from the view and add it to mongodb
        var newTodo = Todo(req.body).save(function(err, data) {
            if (err) throw err;
            res.json(data);
        });
    });


    app.delete('/todo/:item', function(req, res) {

        console.log(req.params.item);
        //delete requested item from mongodb
        Todo.find({_id: req.params.item}).remove(function(err, data) {
            if (err) throw err;
            res.json(data);
        });
    });
    
};