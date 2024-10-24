const express = require('express');
const router = express.Router();

router.get('/project/:id', (req, res) => {
    res.send("Hi, welcome to my site!");
    console.log(`Render of a customized version of the pug project template...`)
});

module.exports = router;