// Importing the requirements
 const express = require('express')
 const mongoose = require('mongoose')
 const cors = require('cors')
 const bodyparser = require('body-parser')

// Declarations
const app = express()

// CORS Middleware
app.use(cors({origin: 'http://localhost:3000'}))

// BodyParser
app.use(bodyparser.json())

// Test route{
app.get('/helloworld', (req, res)=>{
    res.send("<strong>Hello Everyone</strong>")
})

app.get('/display/:name' ,(req,res)=>{
    res.send(req.params.name)
})
var PORT = process.env.PORT || 3000
//Starting the Server
app.listen(PORT, ()=>{
    mongoose.connect('mongodb://localhost:27017/meanworkshop', (err)=>{
        if(err){
            console.log("Cannot connect to DB")
        } else {
            console.log('Connected to DB')
        }
    })
})