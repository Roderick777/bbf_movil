class Mail {
  static getMailOptions(from, to, subject, text) {
    var mailOptions = {
      from,
      to,
      subject,
      text
    };
  }

  static send(mailOptions) {
    const transporter = require('../config/mail')
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email enviado: ' + info.response);
      }
    });
  }
}

module.exports = Mail