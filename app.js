const express = require('express');

const app = express();

const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple'
];

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
    console.log(`This is the about page.. or should be`)
});

app.get('/project/:id', (req, res) => {
    res.send("Hi, welcome to my site!");
    console.log(`Render of a customized version of the pug project template...`)
});

app.get('/noroute', (req, res) => {
    res.send("Hi, welcome to my site!");
});

app.listen(3000, () => {
    console.log(`Running on localhost:3000.`);
});
