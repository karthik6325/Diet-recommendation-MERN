const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    age: Number,
    weight: Number,
    height: Number,
    dietType: String,
    activityLevel: String,
  });

  module.exports = mongoose.model('UserData', userSchema);