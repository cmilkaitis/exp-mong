const express = require('express')
const bp = require('body-parser')
const app = express()

app.use(bp.urlencoded({extended:false}))
app.use(bp.json())

app.get('/', (req,res) => res.send("Working"))

const port = process.env.PORT|| 3000
app.listen(port, console.log(`Listening on ${port}`))
