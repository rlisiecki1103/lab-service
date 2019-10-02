var express = require('express');
var router = express.Router();

router.get('/downloadLab', function(req, res, next) {
    res.send('running');
    res.end;
});

module.exports = router;
