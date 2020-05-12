const mongoose = require('mongoose')

const library = new mongoose.Schema({
    book_title:String,
    book_price:String,
    book_genre:String,
    date_published:String,
    name_of_author:String,
    number_available:Number,
    book_description:String,
})

module.exports = mongoose.model('library', library)