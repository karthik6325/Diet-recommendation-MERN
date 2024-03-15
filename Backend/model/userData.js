const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true,
    },
    Name: String,
    Age: Number,
    Weight: Number,
    Height: Number,
    Disease: String,
    Diet_Type: String,
    Activity_level: String,
});

module.exports = mongoose.model('UserData', userDataSchema);