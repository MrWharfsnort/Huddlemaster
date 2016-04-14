// Dependencies
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var database   = require('./config/database');
var mongoose   = require('mongoose');
var morgan     = require('morgan');

Program        = require('./models/program');
Huddle         = require('./models/huddle');

var PORT       = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(morgan('dev'));

// Connect to mongoose
mongoose.connect(database.dev_url);
var db = mongoose.connection;
db.on('error', console.error);

// Routes


// Get All Programs
app.get('/api/programs', function(req, res) {
   Program.getPrograms(function(err, programs) {
      if (err) {
         throw err;
      }
      res.json(programs);
   });
});

// Add Program
app.post('/api/programs', function(req, res) {
   var program = req.body;
   Program.addProgram(program, function(err, program) {
      if (err) {
         throw err;
      }
      res.json(program);
   });
});

// Update Program
app.put('/api/programs/:_id', function(req, res) {
   var id = req.params._id;
   var program = req.body;
   Program.updateProgram(id, program, {}, function(err, program) {
      if (err) {
         throw err;
      }
      res.json(program);
   });
});

// Remove Program
app.delete('/api/programs/:_id', function(req, res) {
   var id = req.params._id;
   Program.removeProgram(id, function(err, program) {
      if (err) {
         throw err;
      }
      res.json(program);
   });
});

// Get All Huddles
app.get('/api/huddles', function(req, res) {
   Huddle.getHuddles(function(err, huddles) {
      if (err) {
         throw err;
      }
      res.json(huddles);
   });
});

// GET Huddle by ID
app.get('/api/huddles/:_id', function(req, res) {
   Huddle.getHuddleById(req.params._id, function(err, huddle) {
      if (err) {
         throw err;
      }
      res.json(huddle);
   });
});

// Add Huddle
app.post('/api/huddles', function(req, res) {
   var huddle = req.body;
   Huddle.addHuddle(huddle, function(err, huddle) {
      if (err) {
         throw err;
      }
      res.json(huddle);
   });
});

// Update Huddle
app.put('/api/huddles/:_id', function(req, res) {
   var id = req.params._id;
   var huddle = req.body;
   Huddle.updateHuddle(id, huddle, {}, function(err, huddle) {
      if (err) {
         throw err;
      }
      res.json(huddle);
   });
});

// Remove Huddle
app.delete('/api/huddles/:_id', function(req, res) {
   var id = req.params._id;
   Huddle.removeHuddle(id, function(err, huddle) {
      if (err) {
         throw err;
      }
      res.json(huddle);
   });
});

// Start server
app.listen(PORT);
console.log('Server running on port ' + PORT + '...');
