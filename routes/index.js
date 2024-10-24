const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
    console.log(`This is the about page.. or should be`)
});


router.get('/noroute', (req, res) => {
    res.send("Hi, welcome to my site!");
});

module.exports = router;