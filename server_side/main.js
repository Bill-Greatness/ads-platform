const express = require('express')
const bodyParser = require('body-parser')
const graphqlHTTP = require('express-graphql')
const cors = require('cors')

//const  mongoose = require('mongoose')

const schema = require('./schema/schema')
const app = express()


 //const conn = mongoose.connect('connectionString', {
 //       useNewUrlParser:true,
 //   })


app.use(cors());
app.use('/graphql', bodyParser.json(), graphqlHTTP({
 schema:schema,
 graphiql:true
}))

app.get('/api/electronic-gadgets', (req, res) => {
  conso
})
var port = process.env.PORT || 4000
app.listen(port, () => {
   console.log(`App is Running on ${port}`)
})