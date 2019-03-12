// Importing the requirements
 const express = require('express')
 const mongoose = require('mongoose')
 const cors = require('cors')
 const bodyparser = require('body-parser')

// Declarations
const app = express()

// Test route{
app.get('/helloworld', (req, res)=>{
    res.send("<strong>Hello Everyone</strong>")
})

app.get('/display/:name' ,(req,res)=>{
    res.send(req.params.name)
})
var PORT = process.env.PORT || 62000
//Starting the Server
app.listen(PORT, ()=>{
    console.log("Server started at port, " + PORT)
})