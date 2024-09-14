const knex = require('../../configs/database.js');
const logger = require('../../configs/logger.js');

class Health {
    check(req, res){
        knex.raw("SELECT 1").then(() => {
            res.status(200).json({status: "UP"});
        })
        .catch((error) => {
            res.status(500).json({status: "DOWN"})
            logger.error(error.message);
        });
    }
}

const health = new Health

module.exports = health;