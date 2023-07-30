require('dotenv').config()
const logger = require('../../configs/logger.js')
const transporter = require('../../configs/smtp-config.js')

// send mail
async function sendMmail(name,telephone,email,message) {
    const mailSent = await transporter.sendMail({
      subject: 'Contact',
      from: process.env.SMTP_FROM_USER+' <'+process.env.SMTP_USER+'>',
      to: [process.env.SMTP_USER, process.env.ADMIN_MAIL],
      html: `
      <html>
        <body>
            <h2>You have a new message!</h2>
                <br>
                    <ul>
                        <li>Name: `+name+`</li>
                        <li>Telephone: `+telephone+`</li>
                        <li>email: `+email+`</li>
                        <li>message: `+message+`</li>
                    </ul>
                <br>
            <hr>
                <div align='center'>
                    <p>
                       From:<a href='https://github.com/Jose-cyber/contacts-api'>@contacts-api</a>
                    </p>
                </div>
        </body>
      </html> 
      `,
    });
  
    return {
        Response: mailSent.response,
        MessageId: mailSent.messageId
    }
  }

module.exports = sendMmail()