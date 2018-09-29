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
    res.json(req.body);
  });

  app.post('/api/notes', function(req, res) {
    res.send(req.body);
  });
  app.put('/api/notes', function(req, res) {
    res.json(req.body);
  
  });
  app.delete('/api/notes', function(req, res) {
    res.send(req.body);
  });
};
