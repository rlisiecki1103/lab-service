var zipFolder = require('zip-folder');
var express = require('express');
var router = express.Router();

const folderpath = '/home/coder/node-lab/';
const zipPath = '/home/coder/lab-service/zips/archive.zip';

router.get('/', function(req, res, next) {
  res.send('Service Online');
});

router.get('/downloadLab', function(req, res, next) {
  zipFolder(folderpath, zipPath, function(err) {
    if(err) {
      res.send('Error generating zip: ' + err);
    } else {
      res.download(folderpath + '/archive.zip');
    }
  });

    res.end;
});

module.exports = router;
