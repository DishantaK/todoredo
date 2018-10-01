const path = require('path');
var noteDir = require('../models/notes');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));

  });
  app.get('/api/notes', function(req, res) {
    noteDir.find({})
    .then(function(dbnoteDir) {
      res.json(dbnoteDir);
    })
    .catch(function(err) {
      res.json(err);
    });
  });

  app.post('/api/notes', function(req, res) { 

    noteDir.create(req.body)
    .then(function(dbnoteDir) {
     
      res.json(dbnoteDir);
    })
    .catch(function(err) {
    
      res.json(err);
    });
    res.send(req.body);
  });
  app.put('/api/notes', function(req, res) {
    noteDir.findOneAndUpdate(req.body)
    .then(function(dbnoteDir) {
     
      res.json(dbnoteDir);
    })
    .catch(function(err) {
    
      res.json(err);
    });
  
  });
  app.delete('/api/notes', function(req, res) {
    noteDir.deleteOne(req.body)
    .then(function(dbnoteDir) {
     
      res.json(dbnoteDir);
    })
    .catch(function(err) {
    
      res.json(err);
    });
    res.send(req.body);
  });
};
