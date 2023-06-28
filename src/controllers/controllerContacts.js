const knex = require('../configs/database.js');
const logger = require('../configs/logger.js');
const deleteContactsSchema = require('../schemas/registerContactSchema.js')
const registerContactSchema = require('../schemas/registerContactSchema.js')

class ControllerContacts {
    send(req, res){
        try {
            registerContactSchema.validateSync(req.body);
            
            knex
                .insert([ 
                    {
                        name: req.body.name,
                        email: req.body.email,
                        telephone: req.body.telephone,
                        message: req.body.message,
                    }
                ])
                .into('contacts')
                .timeout(1000)
                .then(()=>{
                    res.status(200).json({ status: 'Success'})
                })
                .catch((error) => {
                    res.status(500).json({ status: 'Failed'})
                    logger.error(error)
                })
          } 
        catch (err) {
            return res.status(400).json({ Missing: 'Parameters'});
        } 
        
            
    }
    list(req, res){
       knex
        .select()
        .from('contacts')
        .timeout(1000)
        .then((query_result) =>{
            res.status(200).json({ contacts: query_result})
        })
        .catch((error) => {
            res.status(500).json({ status: 'Failed'})
            logger.error(error);
        })
    }
    delete(req, res){
        try{
            deleteContactsSchema.validateSync(req);
            knex('contacts')
              .del()
              .where("id","10")
              .timeout(1000)
              .then((query_result) => {
                res.status(200).json({ status: 'Sucess'})
                logger.info(query_result)
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