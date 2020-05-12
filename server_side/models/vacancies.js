const mongoose = require('mongoose')

const vacancies = new mongoose.Schema({
    vacn_title:String,
    vacn_location:String,
    vacn_tag:String,
    vacn_duration:String,
    vacn_price:String,
    vacn_description:String,
})

module.exports = mongoose.model('vacancies', vacancies)