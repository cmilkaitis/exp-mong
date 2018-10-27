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
  },
  owners: {
    type: [String]
  }
})

module.exports = Stock = mongoose.model("stocks", StockSchema)
