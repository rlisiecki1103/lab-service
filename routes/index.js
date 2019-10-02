var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('<h2>Your service is running!</h2>'+ 
    '<br><img src="https://media1.tenor.com/images/673bcc64c8b768784b48d2163bcb2f52/tenor.gif?itemid=4720283" alt="Trulli" width="500" height="333">');
    res.end;
});

router.get('/downloadLab', function(req, res, next) {
    res.send('running');
    res.end;
});

module.exports = router;
