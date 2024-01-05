const mongoose = require('mongoose');
const validator = require('validator');

const notesSchema = new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    note:{
        type:String,
        required:true,
    },
    
},{timestamps:true})

notesSchema.index({ note: 'text' });
module.exports = mongoose.model('Notes',notesSchema);