var mongoose = require('mongoose');

// Huddle Schema
var huddleSchema = mongoose.Schema({
   name: {
      type: String,
      required: true,
      unique: true
   },
   author: {
      type: String,
      required: true
   },
   program: {
      name: {
         type: String,
         required: true
      }
   },
   details: {
      objective: {
         type: String,
         required: true
      },
      content: {
         type: String,
         required: true
      },
      practice: {
         type: String,
         required: true
      }
   },
   is_published: Boolean
}, {
   timestamps: true
});

var Huddle = module.exports = mongoose.model('Huddle', huddleSchema);

// Get Huddles
module.exports.getHuddles = function (callback, limit) {
   Huddle.find(callback).limit(limit);
}

// Get Huddle by ID
module.exports.getHuddleById = function (id, callback) {
   Huddle.findById(id, callback);
}

// Add Huddle
module.exports.addHuddle = function (huddle, callback) {
   Huddle.create(huddle, callback);
}

// Update Huddle
module.exports.updateHuddle = function (id, huddle, options, callback) {
   var query = {_id: id};
   var update = {
      name: huddle.name,
      program: huddle.program,
      details: {
         objective: huddle.details.objective,
         content: huddle.details.content,
         practice: huddle.details.practice
      },
      is_published: huddle.is_published
   };
   Huddle.findOneAndUpdate(query, update, options, callback);
}

// Remove Huddle
module.exports.removeHuddle = function (id, callback) {
   var query = {_id: id};
   Hudle.remove(query, callback);
}