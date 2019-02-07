const route = require('express').Router();

route.get('/', function(req,res){
    res.render('welcome', {msg : "Welcome"});
})


route.get('/login', function(req,res){
    res.render('login', {msg :'Welcome to login page'})
})

route.get('/register', function(req,res){
    res.render('register', {msg : 'Welcome to registeraion page'})
})

module.exports = route;