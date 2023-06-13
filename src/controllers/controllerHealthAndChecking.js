const knex = require('../../knexfile.js');

class HealthAndChecking {
    actuator(req, res){
        knex.raw("SELECT 1").then(() => {
            res.json({status: "UP"}).status(200);
        })
        .catch((e) => {
            res.status(500).json({status: "DOWN"})
            console.error(e);
        });
    }
    index(req, res){
        res.send({message: 'contacts api'})
    }
    metrics(req,res){
        
    }
}

module.exports = HealthAndChecking;