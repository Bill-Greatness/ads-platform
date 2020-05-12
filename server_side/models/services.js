const mongoose = require('mongoose')

const services = new mongoose.Schema({
    service_name:String,
    service_location:String,
    service_tag:String,
    service_duration:String,
    service_price:String,
    service_description:String,
})

module.exports = mongoose.model('services', services)