var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use('/vendor', express.static(__dirname + '/bower_components'));

var controllers = require('./controllers');

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});



app.get('/api/events', controllers.events.index);
app.get('/api/events/:eventId', controllers.events.show);
app.post('/api/events', controllers.events.create);
app.delete('/api/events/:eventId', controllers.events.destroy);
app.put('/api/events/:eventId', controllers.events.update);

app.get('/api/users', controllers.users.index);
app.get('/api/users/:userId', controllers.users.show);
app.post('/api/users', controllers.users.create);
app.delete('/api/users/:userId', controllers.users.destroy);
app.put('/api/users/:userId', controllers.users.update);

var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

app.use(cookieParser());
app.use(session({
  secret: 'PODONENUMBERONE',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());








app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
