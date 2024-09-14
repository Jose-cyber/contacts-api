// configs
const knex = require('../../configs/database.js');
const logger = require('../../configs/logger.js');

// schemas
const deleteContactsSchema = require('../../schemas/deleteContactsSchema.js')
const registerContactSchema = require('../../schemas/registerContactSchema.js')

// services
const emailService = require('../../services/mail/nodemailerSend.js');
const time = require('../../services/timezone/timezone.js')
const RabbitMQService = require('../../services/rabbitMQ/rabbitMQService.js');

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
                    // Verificar resultado do envio de email antes de responder
                    if (sendMailRequest.success) {
                        return res.status(200).json({ status: 'Success', sendMailRequest });
                    } else {
                        res.status(500).json({ status: 'Failed to send mail'});
                        logger.error(sendMailRequest.error)
                    }
                })
                .catch((error) => {
                    res.status(500).json({ status: 'Failed' });
                    logger.error(error.message)
                });
          } 
        catch(error) {
            res.status(400).json({ Missing: 'Parameters'});
            logger.error(error.message)
        } 
    }

    sendQueue(req, res){
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
                    RabbitMQService.sendToQueue({
                        time: time.get_hour(),
                        date: time.get_date(),
                        name: req.body.name,
                        email: req.body.email,
                        telephone: req.body.telephone,
                        message: req.body.message,
                    })
                    res.status(200).json({status: 'sucess'})
                })

          } 
        catch(error) {
            logger.error(error.message)
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
            logger.error(error.message);
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
              .then(() => {
                res.status(200).json({ status: 'Success', message: "Contact "+contactId+" deleted successfully." })
                logger.info("Contact "+contactId+" deleted successfully." )
            })
            .catch((error) =>{
                res.status(500).json({ status: 'Failed'})
                logger.error(error.message);
            })
        }
        catch(error){
            res.status(400).json({ Missing: 'Parameters'});
            logger.error(error.message);
        }
        
    }
}

module.exports = ControllerContacts;