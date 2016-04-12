var mongoose = require('mongoose');

// Program Schema
var programSchema = mongoose.Schema({
   name: {
      type: String,
      required: true,
      unique: true
   }
},{
   timestamps: true
});

var Program = module.exports = mongoose.model('Program', programSchema);

// Get Programs
module.exports.getPrograms = function (callback, limit) {
   Program.find(callback).limit(limit);
}

// Get Program by ID
module.exports.getProgramById = function (id, callback) {
   Program.findById(id, callback);
}

// Add Program
module.exports.addProgram = function (program, callback) {
   Program.create(program, callback);
}

// Update Program
module.exports.updateProgram = function (id, program, options, callback) {
   var query = {_id: id};
   var update = {
      name: program.name
   };
   Program.findOneAndUpdate(query, update, options, callback);
}

// Remove Program
module.exports.removeProgram = function (id, callback) {
   var query = {_id: id};
   Program.remove(query, callback);
}