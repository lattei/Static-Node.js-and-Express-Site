const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('about');
    console.log(`This is the about page.. or should be`)
});

module.exports = router;