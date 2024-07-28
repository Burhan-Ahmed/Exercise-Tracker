const mongoose = require('mongoose')
const exerciseSchema = new mongoose.Schema({
    name: String,
    description: String,
    duration: Number,
    date: Date
})

const Exercise = mongoose.model('UserData', exerciseSchema);

module.exports = Exercise;
