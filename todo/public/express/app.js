var express = require('express');
var app = express();


app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/assets'));
/*app.use('/assets', function(req, res, next) {

    
    next();
});*/


app.get('/', function(req, res) {


    res.render('index');


}).get('/contact', function(req, res) {

    res.render('contact', {
        get: req.query 
    });


}).get('/rafi', function(req, res) {


    res.send('this is my personal page');


}).get('/profile/:username', function(req, res) {

    var data = {
        age: 27,
        job: 'enthusiast',
        hobby: [
            'cycling',
            'visiting places',
            'astronomy',
            'archeology',
            'history',
            'writing code'
        ]
    };

    res.render('profile', {
        username: req.params.username,
        data: data
    });


});


app.listen(3000);