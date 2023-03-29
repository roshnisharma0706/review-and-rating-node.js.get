

const express = require("express")
const app =express()
require('dotenv').config()
require("./models/config")
const user_Routers = require('./routes/user_Routers')

app.use(express.json())


app.use("",user_Routers)
console.log('hello roshni',process.env.port||8500);

app.listen(8500,(req,res)=>{
console.log('Server started successfully:${proccess.env.port||8500}')
})

 
   



