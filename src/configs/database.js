require('dotenv').config()
const config = require('../../knexfile.js');
const logger = require('./logger.js')
const environment = process.env.NODE_ENV || 'development';
const knex = require('knex')(config[environment])

async function runMigrationsAndSeeds() {
    if (process.env.DB_MIGRATION === 'true') {
        try {
            // Run migrations
            await knex.migrate.up(config[environment]);
            logger.info('Database migrations applied successfully.');            
        } catch (error) {
            logger.error(`Error applying migrations and/or seeds: ${error.message}`);
            throw error; // Re-throw to halt execution if necessary
        }
    }

    if (process.env.DB_SEEDS === 'true'){
        try{
            // Run seeds
            await knex.seed.run(config[environment]);
            logger.info('Database seeds executed successfully.');
        }
        catch (error) {
            logger.error(`Error applying seeds: ${error.message}`);
            throw error; // Re-throw to halt execution if necessary
        }
    }
}

runMigrationsAndSeeds()


module.exports = knex;