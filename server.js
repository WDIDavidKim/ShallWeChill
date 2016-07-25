var controllers = require('./controllers');
var db = require("./models"),
    Post = db.Post,
    User = db.User,
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use('/vendor', express.static(__dirname + '/bower_components'));
app.set('view engine', 'hbs');



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

app.set('view engine', 'hbs');

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

app.get('/login', function (req, res) {
  res.render('login'); // you can also use res.sendFile
});

app.post('/login', passport.authenticate('local'), function (req, res) {
  console.log(req.user);
  // res.send('logged in!!!'); // sanity check
  res.redirect('/'); // preferred!
});

app.get('/signup', function (req, res) {
  res.render('signup'); // you can also use res.sendFile
});
app.post('/signup', function (req, res) {
  User.register(new User({ username: req.body.username }), req.body.password,
    function (err, newUser) {
      passport.authenticate('local')(req, res, function() {
        res.redirect('/');
      });
    }
  );
});

app.get('/logout', function (req, res) {
  console.log("BEFORE logout", JSON.stringify(req.user));
  req.logout();
  console.log("AFTER logout", JSON.stringify(req.user));
  res.redirect('/');
});

app.get('/', function (req, res) {
    res.render('index', {user: JSON.stringify(req.user) + " || null"});
});





app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
