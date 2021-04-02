const nodemailer = require('nodemailer');

// Configurar cuenta de corros emisora
const mailConfig = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rodrigoalexissss@gmail.com',
    pass: 'rogocov17682562-6'
  }
});

module.exports = mailConfig