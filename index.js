const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

const uri = "mongodb+srv://<username>:<password>@cluster0.jmtl7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
client.connect(err => {
  const collection = client.db("test").collection("devices");
  });

const app = express()

app.use(bodyParser.json())
app.use(cors())

const port = 5000

app.get('/', (req, res) =>{
  res.send('Database Working')
})

app.listen(process.env.PORT || port)