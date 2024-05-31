const nodemailer = require('nodemailer');
require('dotenv').config()

class EmailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASSWORD,
            },
            tls: {
              rejectUnauthorized: false,
            },
            debug: false,
        });
    }

    async sendMail(name, telephone, email, message) {
        try {
            const mailSent = await this.transporter.sendMail({
                subject: 'Contact',
                from: `${process.env.SMTP_FROM_USER} <${process.env.SMTP_USER}>`,
                to: [process.env.SMTP_USER, process.env.ADMIN_MAIL],
                html: this.generateEmailBody(name, telephone, email, message),
            });
            return {
                Response: mailSent.response,
                MessageId: mailSent.messageId,
                success: true,
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
            };
        }
    }

    generateEmailBody(name, telephone, email, message) {
        return `
            <html>
                <body>
                    <h2>You have a new message!</h2>
                    <br>
                    <ul>
                        <li>Name: ${name}</li>
                        <li>Telephone: ${telephone}</li>
                        <li>Email: ${email}</li>
                        <li>Message: ${message}</li>
                    </ul>
                    <br>
                    <hr>
                    <div align='center'>
                        <p>
                            From: <a href='https://github.com/Jose-cyber/contacts-api'>@contacts-api</a>
                        </p>
                    </div>
                </body>
            </html>
        `;
    }
}

module.exports = EmailService;

