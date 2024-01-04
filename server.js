const express=require("express")
const dotenv=require("dotenv").config()
const app=express()
const contactRoutes=require("./routes/contactRoutes")
app.use('/api/contacts',contactRoutes)
const port=process.env.PORT||3000
// app.get('/api/contacts',(req,res)=>{
//     res.status(200).json({"message":"get all contacts"})
// })


app.listen(port,()=>{
    console.log(`server is running ${port}`)
})