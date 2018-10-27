const express = require('express')
const bp = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const db = require('./config/keys').mongoURI
const User = require('./models/User')

app.use(bp.urlencoded({extended:false}))
app.use(bp.json())



mongoose
  .connect(db)
  .then(() => {
    console.log("mongo db connected")

    let bob = new User({name: "Bob Smith", password: "bobspassword"})
    bob.save((err,bob)=> {
      if(err) return console.error(err)
    })
  })
  .catch(err => console.log(err))

app.get('/', (req,res) => res.send("Working"))

const port = process.env.PORT|| 3000
app.listen(port, console.log(`Listening on ${port}`))
