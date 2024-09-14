const logger = require('./src/configs/logger')
require('dotenv').config()

module.exports = {
  local: {
    client: 'sqlite3', // or 'better-sqlite3'
    connection: {
      filename: ':memory:', 
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: "src/migrations/",
    },
    seeds: {
      directory: 'src/seeds',
    },
  },
  development: {
    client: 'postgresql',
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT || 5432,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      charset: 'utf8',
    },
    pool: {
      min: 0,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: "src/migrations/",
    },
    seeds: {
      directory: 'src/seeds',
  },
  debug: process.env.DB_DEBUG,
  log: {
      warn(message) {
        logger.warn('[Knex Warning]:', message);
      },
      error(message) {
        logger.error('[Knex Error]:', message);
      },
      deprecate(message) {
        logger.info('[Knex Deprecation]:', message);
      },
      debug(message) {
        logger.debug('[Knex Debug]:', message);
      },
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT || 5432,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      charset: 'utf8',
    },
    pool: {
      min: 0,
      max: 20
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: "src/migrations/",
    },
    seeds: {
      directory: 'src/seeds',
    },
    debug: process.env.DB_DEBUG,
    log: {
      warn(message) {
        logger.warn('[Knex Warning]:', message);
      },
      error(message) {
        logger.error('[Knex Error]:', message);
      },
      deprecate(message) {
        logger.info('[Knex Deprecation]:', message);
      },
      debug(message) {
        logger.debug('[Knex Debug]:', message);
      },
    },
  },
};
