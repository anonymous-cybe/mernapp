const express = require('express')
const dotenv = require('dotenv').config()
//PORT
const port = process.env.PORT || 5000;
//initializing express
const app = express()
//middleware : this helps get request from client side
//bodyparser for raw json:
app.use(express.json())
//bodyparser for urlencoded
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes.js'))

app.listen(port, () => {
    console.log(`server started on port:${port}`);
})