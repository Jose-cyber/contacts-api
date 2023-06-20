const knex = require('../configs/database.js');
const logger = require('../configs/logger.js');

class ControllerContacts {
    send(req, res){
        const checkBodyParam = ['name','email','telephone','message']; 

        Object.entries(req.body).forEach(([key])=>{
            if (!checkBodyParam.includes(key)){
               return res.status(404).json(404)
            }
        })
        
     
        knex
            .insert(
            [ 
                {
                    name: req.body.name,
                    email: req.body.email,
                    telephone: req.body.telephone,
                    message: req.body.message,
                }
            ]
            )
            .into('contacts')
            .timeout(1000)
            .then(()=>{
               res.status(200).json('thanks')
            })
            .catch((error) => {
                res.status(500).json('Error')
                console.log(error)
            })
        
        
            
    }
    list(req, res){
       knex
        .select()
        .from('contacts')
        .timeout(1000)
        .then((query_result) =>{
            res.status(200).json({contacts:query_result})
        })
        .catch((error) => {
            res.status(500).json({})
            logger.error(error);
        })
    }
    delete(req, res){

    }
}

module.exports = ControllerContacts;