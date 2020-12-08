const mongoose = require('mongoose')

const basedatos = {
    MongoOptions : {
        useNewUrlParser: true, 
        useCreateIndex: true, 
        useUnifiedTopology: true
    }, 
    MongoUri: 'mongodb://localhost:27017/factoringapp',
    MongoConnect: function(uri, options) {
        mongoose.connect(uri, options).then(() => console.log('conectado a mongoose'), err => err);
    }
}

module.exports = basedatos