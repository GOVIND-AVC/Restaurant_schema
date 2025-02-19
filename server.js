const express =require('express')

const mongoose=require('mongoose')
const restaurant = require('./model/restaurant_details')
const items=require('./model/item_details')

const app=express()

const port = 3000

app.use(express.json)

app.get('/ping',(req,res)=>{
    res.send('pong')
})

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})