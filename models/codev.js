var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var codeSchema = new Schema({
   


   code: {type: String, required: true},
   mformat: {type: String, required: true},
   time: {type: String, required: true},
   


  

});

module.exports = mongoose.model('CodeV', codeSchema);