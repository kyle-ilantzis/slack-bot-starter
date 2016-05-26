"use strict";

var knex = require( 'knex' )( {
    client: 'pg', connection: process.env.POSTGRES_URL, searchPath: 'public', debug: true
} );

var database = {};

// This is how you should add functionality for accessing your database server.
// Define a new module in a seperate file that exports a function accepting knex
// and the soon to be database global variable.
require(ROOT + '/database/todos/todos.js')(knex,database);

module.exports = database;
