const  express = require('express')
const bodyParse = require("body-parser")
const mongoose = require("mongoose")

const app = express()

app.get('/', (req, res) => res.send('Connected Successfully'))
app.listen(5000)
console.log(`Example app listening on port 5000`)