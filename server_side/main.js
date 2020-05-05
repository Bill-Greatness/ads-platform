const express = require('express')
const bodyParser = require('body-parser')
const graphqlHTTP = require('express-graphql')
const cors = require('cors')

//const  mongoose = require('mongoose')
const schema = require('./schema/schema')
const app = express()

var root = {
  user: () => {
    return 'Hello world!';
  },
};

 //const conn = mongoose.connect('connectionString', {
 //       useNewUrlParser:true,
 //   })


app.use(cors());
app.use('/graphql', bodyParser.json(), graphqlHTTP({
 schema:schema,
 graphiql:true
}))
var port = process.env.PORT || 3000
app.listen(port, () => {
   console.log(`App is Running on ${port}`)
})