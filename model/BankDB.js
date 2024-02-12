const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bankSchema = new Schema({
   condition:Boolean,
    amount : Number,
    category : String,
    vendor : String
})

const Bank = mongoose.model("Bank", bankSchema)
module.exports = Bank