const express = require('express')
const bodyParser = require('body-parser')
const graphqlHTTP = require('express-graphql')
const cors = require('cors')

const  mongoose = require('mongoose')

const schema = require('./schema/schema')
const app = express()

/* This will be moved to the env file when uploading to git hub or commit changes */
 mongoose.connect('mongodb+srv://logicians:Gre@nes$_1@LoGi)@logicians-ghana-qdtql.mongodb.net/test?retryWrites=true&w=majority', {
       useNewUrlParser:true,
       useUnifiedTopology:true
   })

var db_access = mongoose.connection
app.use(cors());
app.use('/graphql', bodyParser.json(), graphqlHTTP({
 schema:schema,
 graphiql:true
}))

app.get('/api/electronic-gadgets', (req, res) => {
  
})
var port = process.env.PORT || 4000
app.listen(port, () => {
  db_access.once('open', () => {
    console.log("Message: Database access Granted!")
  })
  db_access.on('error', (err) => {
    console.log(err)
  })
   console.log(`App is Running on ${port}`)
})