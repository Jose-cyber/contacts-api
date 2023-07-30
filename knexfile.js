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
            min: 1,
            max: 3,
            createTimeoutMillis: 3000,
            acquireTimeoutMillis: 30000,
            idleTimeoutMillis: 30000,
            reapIntervalMillis: 1000,
            createRetryIntervalMillis: 100,
            propagateCreateError: false
            },
        migrations: {
            tableName: 'knex_migrations',
            directory: "src/migrations",
        },
        seeds: {
            directory: 'src/seeds',
        },
        debug: true,
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
            min: 2,
            max: 5,
            createTimeoutMillis: 3000,
            acquireTimeoutMillis: 30000,
            idleTimeoutMillis: 30000,
            reapIntervalMillis: 1000,
            createRetryIntervalMillis: 100,
            propagateCreateError: false
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: "src/migrations",
        },
        seeds: {
            directory: 'src/seeds',
        },
        debug: false,
        }
}