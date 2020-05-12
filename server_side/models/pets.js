const mongoose = require('mongoose')

const pets = new mongoose.Schema({
    animal_name:String,
    number_available:Number,
    price:String,
    description:String,
})

module.exports = mongoose.model('pets', pets)