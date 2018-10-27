const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StockSchema = new Schema({
  ticker: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  market_cap: {
    type: Number,
    require: true
  },
  date: {
    type: Date,
    default: Date.now,
    require: true
  },
  searched: {
    type: Number,
  },
  purchased: {
    type: Number,
  },
  sold: {
    type: Number,
  },
  tracked: {
    type: Number,
  }
})

module.exports = Stock = mongoose.model("stocks", StockSchema)



/* Create a new mongoose Schema for stocks Be sure to use correct common practices for capitalization and defining.
You are required to create a minimum of 5 attributes for the schema with a real goal of 10. 

Challenges: Note - some of these challenges may need you to check out the mongoose schema documentation or do a google search for the answer. 
Some of your data should be analytic based. IE not an attribute you would pull from a stock api.
Try to use a unique data type other then String, Number or Date
Make one of your attributes an array of a datatype
Research and use one other option like default and required. */