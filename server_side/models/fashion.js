const mongoose = require('mongoose')

const fashion = new mongoose.Schema({
    item_name:String,
    item_price:String,
    number_in_stock:String,
    gender_target:String,
    available_colors:String,
    size_range:String,
    item_category:String,
    description:String,
    item_tag:String,
})

module.exports = mongoose.model('fashion', fashion)