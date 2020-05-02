const express = require('express')
const  mongoose = require('mongoose')
const DeviceSchema = require('./schema/electronicDevices')
const app = express()

 const conn = mongoose.connect('connectionString', {
        useNewURIParser:true
        useTopography:true
    })

var port = process.env.PORT || 4000
app.listen(port, () => {
   conn.on('error', () => {
    console.log('An Error Occured in Opening Connection')
   })
   
   conn.on('open', () => {
    console.log('Successfully Connected !')
   })
})