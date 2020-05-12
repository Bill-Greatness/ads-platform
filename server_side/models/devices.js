const mongoose = require('mongoose')

const devices = new mongoose.Schema({
    device_type: String,
    device_name: String,
    price: String,
    and_or_ios_version:String,
    description:String,
    ram_size:String,
    image:String,
    memory_size:String,
    device_color:String,
    device_image:String,
})

module.exports = mongoose.model('devices', devices)