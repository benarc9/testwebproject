const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('post')
});

router.post('/', (req, res) => {
    console.log(req.body);
});

module.exports = router;