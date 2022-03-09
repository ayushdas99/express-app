const express = require('express');
const Post = require('../models/Post');

const router = express.Router();

router.get('/', (req,res) => {
    res.send('We are on pots')
});

router.post('/', (req,res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description 
    });

    post.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({ message: err })
    })
})

module.exports = router;