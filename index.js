const express = require('express')
const mongoose = require('mongoose')
const url = "mongodb+srv://me:pass@cluster0.zwawlch.mongodb.net/?retryWrites=true&w=majority"
const app = express()
mongoose.connect(url)
app.listen("4011", () => { console.log('listening on 4000') })