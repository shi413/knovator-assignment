const express = require('express')
require('./DbConnection/mongoose')
const { userRoutes } = require('./Routes/userRoutes')
const { postRoutes } = require('./Routes/postRoutes')
const app = express()


let PORT = 7000

app.use(express.json())
app.use('/user',userRoutes)
app.use('/post',postRoutes)

app.listen(PORT,()=>{
    console.log(`Server is Running at ${PORT}`)
})
