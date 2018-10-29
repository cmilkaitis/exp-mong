const express = require('express')
const bp = require('body-parser')
const mongoose = require('mongoose')
const db = require('./config/keys').mongoURI
const User = require('./models/User')

const app = express()

app.use(bp.urlencoded({extended:false}))
app.use(bp.json())

mongoose
  .connect(db)
  .then(() => {
    console.log("mongo db connected")
  })
  .catch(err => console.log(err))

// ROUTES
const users = require('./routes/api/users')
app.use('/api/users', users)



const port = process.env.PORT|| 3000
app.listen(port, console.log(`Listening on ${port}`))
