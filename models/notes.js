const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var NoteSchema = new Schema({ 
    
    itemName: {
        type: String,
        unique: true,
        required: "A New Note Entry is Required"
      },


});



var noteDir = mongoose.model("Note", NoteSchema);

// Export the Inventory model
module.exports = noteDir;
