require('dotenv').config()

module.exports = {
    development: { 
        client: 'pg',
        connection: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT || 5432,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
        },
        pool: {
            min: 0,
            max: 10,
            },
        migrations: {
            tableName: 'knex_migrations',
            directory: "src/migrations",
        },
        seeds: {
            directory: 'src/seeds',
        },
        debug: process.env.DB_DEBUG,
    },
    production: {
        client: 'pg',
        connection: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT || 5432,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            },
        pool: {
            min: 0,
            max: 20
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: "src/migrations",
        },
        seeds: {
            directory: 'src/seeds',
        },
        debug: process.env.DB_DEBUG,
        }
}