var zipFolder = require('zip-folder');
var express = require('express');
var router = express.Router();

const folderpath = '/home/coder/node-lab/';
const zipPath = '/home/coder/lab-service/zips/archive.zip';

router.get('/', function(req, res, next) {
  res.send('Service Online');
});

router.get('/downloadLab', async function(req, res, next) {
  await zipFolder(folderpath, zipPath, function(err) {
    if(err) {
      res.send('Error generating zip: ' + err);
      res.end;
    } else{
      res.download(zipPath);
      res.end;
    }
  });
});

module.exports = router;
