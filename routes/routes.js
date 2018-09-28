const path = require('path');
const db = require('../models/notes');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));

  });
  app.get('/api/notes', function(req, res) {
    db.noteDir.find({})
    .then(function (dbnoteDir) {
        res.json(dbnoteDir);
    })
    .catch(function (err) {
        res.json(err);
    });
  });

  app.post('/api/notes', function(req, res) {
    db.noteDir.create({})
    .then(function (dbnoteDir) {
        res.json(dbnoteDir);
    })
    .catch(function (err) {
        res.json(err);
    })
  });
  app.put('/api/notes', function(req, res) {
    db.noteDir.findOneAndUpdate({})
    .then(function (dbnoteDir) {
        res.json(dbnoteDir);
    })
    .catch(function (err) {
        res.json(err);
    })
  });
  app.delete('/api/notes', function(req, res) {
    db.noteDir.remove({})
    .then(function (dbnoteDir) {
        res.json(dbnoteDir);
    })
    .catch(function (err) {
        res.json(err);
    })
    res.json(req.body);
  });
};
