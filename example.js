'use strict';

// Require node modules
const nodemailer = require('nodemailer')
const postmarkTransport = require('nodemailer-postmark-transport')

// Custom Postmark transport for nodemailer
// Best practice would be to save the API key to an env variable
const mailTransport = nodemailer.createTransport(postmarkTransport({
  auth: {
    apiKey: <POSTMARK-API-KEY-HERE>
  }
}))

function sendEmail(user) {
  // Set email optins
  const mailOptions = {
    from: '"Dave" <dave@example.net>',
    to: '${user.email}',
    subject: 'Welcome!',
    text: `<YOUR-TEXT-MESSAGE-HERE>`,
    html: `<YOUR-HTML-MESSAGE-HERE>`
  }
  // Send via nodemailer & custom transport
  return mailTransport.sendMail(mailOptions)
    .then(() => console.log('Email sent successfully!'))
    .catch((error) => console.error('There was an error while sending the email:', error))
}

return sendEmail({
  email: '<USERS-EMAIL-HERE>'
});