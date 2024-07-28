const express = require('express')
const app = express()
const port = 3000

//middlewares:
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors)
app.use(bodyParser.json())



app.listen(port,()=>{
    console.log(`Server is Running on port ${port}`)
})