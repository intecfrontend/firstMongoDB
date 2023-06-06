const express = require('express')
const mongoose = require('mongoose')
const app = express()


const url = "mongodb+srv://me:pass@cluster0.zwawlch.mongodb.net/?retryWrites=true&w=majority"
async function connect(){
  try{await mongoose.connect(url)
  console.log("connected")}
  catch(error){console.log(error)}
}
mongoose.connect(url)

app.listen("4011", () => { console.log('listening on 4000') })