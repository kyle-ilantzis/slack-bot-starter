"use strict";

require( 'dotenv' ).config();

var database = {
    client: 'postgresql',
    connection: process.env.POSTGRES_URL,
    migrations: {
        tableName: 'migrations'
    }
};

module.exports = {

    development: database,

    staging: database,

    production: database

};
