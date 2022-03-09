const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')



const app = express()
const port = 3000

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hell World!')
})

//app.get('/posts', (req, res) => {
  //res.send('We have reached the posts page!! Glad to have you all')
//})

const postRoute = require('./routes/posts');


app.use('/posts', postRoute)


app.use(express.static(path.join(__dirname, 'public')))



app.get('/hello/:name', (req,res) => {
  res.send('Hey, good morning  ' +  req.params.name)
})


app.get('/about', (req, res) => {
    res.json({"ayush":89})
  })

mongoose.connect('mongodb+srv://tester1:tester1@mongo@cluster0.mvywr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', () => {
  console.log('connected, THE DB IS WORKING')
}); 

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})