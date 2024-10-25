const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');


//Getting project by ID


router.get('/:id', (req, res, next) => {
    console.log(`Hm, this was supposed to be Project ${req.params.id}`);
    const id = parseInt(req.params.id);
    const project = projects[id];
    if (project) {
        res.render('project', { project })
    } else {
        const err = new Error('Project not found!!');
        err.status = 404;
        res.render('page-not-found', {error: err })
    }
});

module.exports = router;