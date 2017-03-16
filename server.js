var express = require('express');
var app = express();
var hbs = require('hbs');
var bodyParser = require('body-parser');
var recipesController = require('./controllers/recipes_controller.js');

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/recipes', recipesController);

app.get('/', function(req, res) {
    res.render('welcome');
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log('listening on port ' + port);
});
