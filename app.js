const express = require('express')
const compression = require('compression')
const helmet = require('helmet')
const cors = require('cors')
const dotenv = require('dotenv').config()

const port = process.env.PORT
const endpoints = require('./endpoints')

const app = express()

app.use(cors())
app.use(helmet())
app.use(compression())
app.use(express.json())

endpoints(app)

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))