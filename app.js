const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const methodOverride = require('method-override');


const app = express();

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
    res.render('index');
})
app.get('/aboutus', (req, res) => {
    res.render('aboutus');
})
app.get('/dictionary', (req, res) => {
    res.render('dictionary');
})
app.get('/pronun', (req, res) => {
    res.render('pronun');
})
app.get('/quizend', (req, res) => {
    res.render('quizend');
})
app.get('/quizgame', (req, res) => {
    res.render('quizgame');
})
app.get('/quizindex', (req, res) => {
    res.render('quizindex');
})
app.get('/trans', (req, res) => {
    res.render('trans');
})



const port=process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Serving on port 3000');
})