const express = require('express')
const router = express.Router()
const Bank = require('../model/BankDB')
    // const moment = require('moment')
const { default: axios } = require('axios')
let config = require('../config/config')
let bankData





router.post('/AddTransaction', function(req, res) {
    transactionAdd = req.body
    if (transactionAdd) {
        console.log("first")
        try {
            Bank.findOne({ '_id': transactionAdd.id }).then(respCond => {
                if (respCond) {
                    console.log("it's alraedy added")
                    Bank.find({}).then(response => {
                        res.status(208).json(response)

                    })
                } else {
console.log(transactionAdd)
                    Trans = new Bank(transactionAdd)
                    Trans.save()
                    
                    console.log("city added")

                    Bank.find({}).then(response => {
                        res.status(201).json(response)

                    })

                }
            })
        } catch (error) {}
    }
})

router.delete('/delBank/:id', function(req, res) {
    BankDel = req.params.id
    if (BankDel) {
        try {

            Bank.findOneAndDelete({ '_id': BankDel}).then(respCond => {
                if (respCond) {
                    Bank.find({}).then(response => {
                        res.status(208).json(response)

                    })
                } else {

                    Bank.find({}).then(response => {
                        res.status(201).json(response)

                    })

                }
            })
        } catch (error) {}
    }
})




router.get('/transactionDB', function(req, res) {
    Bank.find({}).sort({ id: -1 }).then(response => {
        res.status(201).json(response)

    })
})



module.exports = router