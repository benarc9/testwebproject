var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next){
    res.render('index', {title: 'My Site', condition: false});
    next();
});

router.get('/about', function(req, res, next) {
    res.render('about', {title: 'About', condition: false});
    next();
});

router.post('/', function(req, res, next){
    console.log("Search Terms: ", req.body.searchterms);
});

module.exports = router;
