const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
app.use(express.static('views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

mongoose.connect('mongodb://127.0.0.1:27017/recipeBookDB');
//mongodb://192.168.100.203:27017/recipeBookDB

const recipeSchema = new mongoose.Schema({
    title: String,
    ingredients: [String],
    instructions: String
});

const Recipe = mongoose.model('Recipe', recipeSchema);

app.get('/', (req, res) => {
    res.render('welcome');
});

app.get('/index', async (req, res) => {
    const recipes = await Recipe.find();
    res.render('index', { recipes });
});

app.get('/recipe/:id', async (req, res) => {
    const recipe = await Recipe.findById(req.params.id);
    if (recipe) {
        res.render('recipe', { recipe });
    } else {
        res.send("Recipe not found");
    }
});

app.post('/add-recipe', async (req, res) => {
    const { title, ingredients, instructions } = req.body;
    const newRecipe = new Recipe({
        title,
        ingredients: ingredients.split(',').map(item => item.trim()), // Convert comma-separated ingredients into an array
        instructions
    });
    await newRecipe.save();
    res.redirect('/index');
});

app.post('/delete-recipe/:id', async (req, res) => {
    await Recipe.findByIdAndDelete(req.params.id);
    res.redirect('/index');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

