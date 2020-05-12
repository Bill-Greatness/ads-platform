const mongoose = require('mongoose')

const client = mongoose.Schema({
        user_id: String,
        firstname: String,
        surname:String,
        date_of_birth:String,
        id_type:String,
        image:String,
        id_number:String,
        gender:String,
        region:String,
        email:String,
        digital_addr:String,
        phone:String,
        password:String
})

module.exports = mongoose.model('client', client)