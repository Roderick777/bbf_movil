const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require("body-parser");
const dbMongo = require('./database/mongodb')
const app = express()

// MongoDB connect
dbMongo.MongoConnect(dbMongo.MongoUri, dbMongo.MongoOptions)

// Settings
app.set('port', process.env.PORT || 4001)
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json());

// Routes
app.use(require('./routes/routes'))
// app.use('/auth', require('./routes/authRoutes'))

module.exports = app;