var child_process = require('child_process');
var express = require('express');
var router = express.Router();

const folderpath = '/home/coder/node-lab/';

router.get('/downloadLab', function(req, res, next) {
    child_process.execSync(`zip -r archive *`, {
        cwd: folderpath
      });
    
      res.download(folderpath + '/archive.zip');
    res.end;
});

module.exports = router;
