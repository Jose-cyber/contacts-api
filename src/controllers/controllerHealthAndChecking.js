const knex = require('../configs/database.js');

class HealthAndChecking {
    actuator(req, res){
        knex.raw("SELECT 1").then(() => {
            res.json({status: "UP"}).status(200);
        })
        .catch((error) => {
            res.status(500).json({status: "DOWN"})
            logger.error(error.message);
        });
    }
    index(req, res){
        res.status(200).json({message: 'contacts api'})
    }
}

module.exports = HealthAndChecking;