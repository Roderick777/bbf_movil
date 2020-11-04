// const admin = require('firebase-admin')
// const serviceAccount = require('../../noteroo-service-account-key.json');

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: 'https://noteroo.firebaseio.com/'
// })
// const db = admin.database()
const db = require('../database/firebase')

const ContactoController = {
    listar(req, res) { 
        db.ref('contactos').once('value', (snapshot) => {
            console.log('contactos', snapshot.val())
            res.json(snapshot.val())
        })
    },
    async crear(req, res) {
        console.log(req.body)
        const ref = db.ref('contactos')
        await ref.push(req.body)
        res.send('recieved')
    }
}

module.exports = ContactoController