const knex = require('../configs/database.js');

class HealthAndChecking {
    actuator(req, res){
        knex.raw("SELECT 1").then(() => {
            res.status(200).json({status: "UP"});
        })
        .catch((error) => {
            res.status(500).json({status: "DOWN"})
            logger.error(error.message);
        });
    }
}

module.exports = HealthAndChecking;