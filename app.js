const express = require('express');
const data = require('./data.json');
const path = require('path');
const app = express();

app.set('view engine', 'pug');

app.use('/static', express.static('public'));



//Created a routes folder, and connecting it.
const routes = require('./routes/index');
const projectRoutes = require('./routes/projects');
const aboutRoutes = require('./routes/about');

//Routes 

app.use('/', routes);
app.use('/projects', projectRoutes);
app.use('/about', aboutRoutes);


/* General Error Handling
1. 404
2. Global
*/
app.use((req, res, next) => {
    const err = new Error();
    err.status = 404;
    err.message = "Oop, page not found!";
    res.render('page-not-found', {error: err })
    next(err);
});

app.use((err, req, res, next) => {
    err.status = err.status || 500;
    err.message = err.message || "Internal Server Error";
    console.log(`${err.status}, ${err.message}`);
    res.status(err.status)
    res.render('error', { message: err.message, error: err });

});






app.listen(3000, () => {
    console.log(`Running on localhost:3000.`);
});
