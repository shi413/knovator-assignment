const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title:{
        type: String, 
        required: true 
    },
    body:{ 
        type: String, 
        required: true, 
    },
    createdBy:{
         type: mongoose.Schema.Types.ObjectId, 
         ref: 'User', 
         required: true, 
    },
    active:{ 
        type: Boolean, 
        default: true, 
    },
    geolocation: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true }
    }
}, { timestamps: true });

const postmodel = mongoose.model('postmodel', postSchema);

module.exports = { postmodel};