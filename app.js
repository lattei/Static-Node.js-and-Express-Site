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
//Created a routes folder, and connecting it.
const routes = require('./routes');
const projectRoutes = require('.routes/projects');

app.use(routes);
app.use('/projects', projectRoutes);
app.use((req, res, next) => {
    console.log("This is an error");
    const err = new Error('This is an error for testing.');
    err.status = 500;
    next(err);

});

//Error Handling
app.use((err, req, res, next) => {
    const err = new Error('Not found!');
    err.status = 404;
    next(err.status);

});

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error', err);

});

app.listen(3000, () => {
    console.log(`Running on localhost:3000.`);
});
