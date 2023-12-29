const knex = require('../configs/database.js');
const logger = require('../configs/logger.js');
const deleteContactsSchema = require('../schemas/deleteContactsSchema.js')
const registerContactSchema = require('../schemas/registerContactSchema.js')
const EmailService = require('../infra/mail/nodemailerSend.js');
const emailService = new EmailService(); 
const TimezoneFormat = require('../configs/timezone.js')
const time = new TimezoneFormat()

class ControllerContacts {
    send(req, res){
        try {
            registerContactSchema.validateSync(req.body);
            
            knex
                .insert([ 
                    {
                        time: time.get_hour(),
                        date: time.get_date(),
                        name: req.body.name,
                        email: req.body.email,
                        telephone: req.body.telephone,
                        message: req.body.message,
                    }
                ])
                .into('contacts')
                .timeout(1000)
                .then(async ()=>{
                    const sendMailRequest = await emailService.sendMail(
                        req.body.name,
                        req.body.telephone,
                        req.body.email,
                        req.body.message
                    );
                    console.log(sendMailRequest)
                    // Verificar resultado do envio de email antes de responder
                    if (sendMailRequest.success) {
                        return res.status(200).json({ status: 'Success', sendMailRequest });
                    } else {
                        throw new Error('Failed to send email');
                    }
                })
                .catch((error) => {
                    res.status(500).json({ status: 'Failed', error: error.message });
                });
          } 
        catch(error) {
            return res.status(400).json({ Missing: 'Parameters'});
        } 
    }
    list(req, res){
       knex
        .select()
        .from('contacts')
        .timeout(1000)
        .then((query_result) =>{
            const formattedResponse= time.formatDateInContacts(query_result);
            res.status(200).json({ contacts: formattedResponse });
        })
        .catch((error) => {
            res.status(500).json({ status: 'Failed'})
            logger.error(error);
        })
    }
    delete(req, res){
        try{
            deleteContactsSchema.validateSync(req.body, { abortEarly: false });
            const contactId = req.body.id;
            knex('contacts')
              .del()
              .where('id', contactId)
              .timeout(1000)
              .then((query_result) => {
                res.status(200).json({ status: 'Success', message: "Contact "+contactId+" deleted successfully." })
                logger.info("Contact "+contactId+" deleted successfully." )
            })
            .catch((error) =>{
                res.status(500).json({ status: 'Failed'})
                logger.error(error);
            })
        }
        catch(err){
            return res.status(400).json({ Missing: 'Parameters'});
        }
        
    }
}

module.exports = ControllerContacts;