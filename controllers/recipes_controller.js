var express = require('express');
var router = express.Router();
var recipes = require('../recipes.js');

router.get('/', function(req, res) {
    res.render('recipes/index', {
        recipes: recipes.seededRecipes
    });
});

router.post('/', function(req, res) {
    var newRecipe = {
        title: req.params.title,
        veggie: req.params.veggie,
        imageUrl: req.params.imageUrl,
    }

    recipes.seededRecipes.push(newRecipe)
    res.redirect('/recipes');
});

router.get('/new', function(req, res) {
    res.render('recipes/new');
});

router.get('/:id', function(req, res) {
    res.render('recipes/show', {
        recipe: recipes.seededRecipes[req.params.id]
    });
});

module.exports = router;