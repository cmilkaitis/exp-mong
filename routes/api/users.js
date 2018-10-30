const express = require('express')
const User = require("../../models/User")

const router = express.Router()

router.post('/', (req,res) => {
  const { name, password, avatar } = req.body
  // Add user to database
  const newUser = new User({ name, password, avatar})
  newUser
    .save()
    .then(user => res.status(201).json(user))
    .catch(err => {
      res.status(500)
        .json({
          status: "error",
          message: err
        })
    })  
})

router.get('/', (req, res) => {
  User
    .find()
    .then(users => {
      res.json(users)
    })
    .catch(err => {
      res.status(500).json( {msg: "server error"} )
      console.log(err)
    })

})

router.get('/:name', (req, res) => {
  const { name } = req.params
  User
  .findOne({name})
  .then(user => {
    res.json(user)
  })
  .catch(err => res.json( {status: "error", message: err} ))
})

// Should be Protected based on if user is logged in
router.delete('/:name', (req, res) => {
  const { name } = req.params
  User
  .remove({name})
  .then(() => {
    res.status(204).json({})
  })
  .catch(err => res.json( {status: "error", message: err} ))
})

module.exports = router