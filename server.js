var express		= require('express');
var app			= express();
var bodyParser	= require('body-parser');
var dataBase = require('./models/model.js');
var routes = require('./routes/routes.js');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var port = process.env.PORT || 8080;

dataBase.isDataBase();
dataBase.initDataBase();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({secret: "welcome in the Chamber of Secrets",
				resave: false,
				saveUninitialized: true}));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use('/', routes);
app.use(function(req, result){
    result.render('not_found', { user: req.session.user});
});
app.listen(port);
console.log('Serving on port : ' + port);