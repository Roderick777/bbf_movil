const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const dbMongo = require('./database/mongodb')
const app = express();

// MongoDB connect
dbMongo.MongoConnect(dbMongo.MongoUri, dbMongo.MongoOptions);

// Settings
app.set('port', process.env.PORT || 4001)
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))

// Routes
app.use(require('./routes/routes'))

module.exports = app;