"use strict";

module.exports = (knex,database) => {

    // With knex and the soon to be database global variable
    // We can attach functions to access our database server.

    database.getTodos = function ( cb ) {
        knex.select( '*' )
            .from( 'todos' )
            .asCallback( cb );
    };

    database.addTodo = function ( desc, cb ) {
        knex( 'todos' )
            .insert( {
                desc: desc
            })
            .asCallback( cb );
    };
};
