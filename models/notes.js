const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var noteSchema = new Schema({ 
    
    itemName: {
        type: String,
        unique: true,
        required: "A New Note Entry is Required"
      },


});



var noteDir = mongoose.model("noteDir", noteSchema);

// Export the Note model
module.exports = noteDir;
