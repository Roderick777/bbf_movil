const express = require('express')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const path = require('path')
const cors = require('cors')
const dbMongo = require('./database/mongodb')

const app = express();

// MongoDB connect
const uri = dbMongo.MongoUri;
const options = dbMongo.MongoOptions;
dbMongo.MongoConnect(uri, options);

// Settings
app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }) )
app.set('view engine', '.hbs')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))

// Routes
app.use(require('./routes/index'))

// Static files
app.use(express.static(path.join(__dirname)))

module.exports = app;