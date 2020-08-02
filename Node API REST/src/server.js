const express = require('express')
const routes = require('./app/routes/routes')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3333

app.use(bodyParser.urlencoded({extended: true})) // bodyparser parses html forms for example.
app.use(express.json())
app.use(cors())
app.use(routes)

app.use((req, res, next) =>{
    res.status(404).json('Sorry, i couldnt find anything.')
})

app.listen(port ,() => console.log(`server running on port : ${port}`))