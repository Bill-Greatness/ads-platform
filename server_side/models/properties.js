const mongoose = require('mongoose')

const property = new mongoose.Schema({
    property_type:String,
    property_name:String,
    property_location:String,
    property_price:String,
    property_registered:Boolean,
    property_description:String,
})

module.exports = mongoose.model('property', property)