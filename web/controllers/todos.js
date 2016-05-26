"use strict";

// Your controllers should be a collection of "RESTful" functions.

module.exports.getTodos = function ( req, res ) {
    database.getTodos( function ( err, todos ) {
        res.render( 'todos/index', {
            title: i18n.__('Todos'),
            todos: todos
        } );
    } );
};

module.exports.addTodo = function ( req, res ) {
    database.addTodo( req.body.desc, function ( err, result ) {
        if ( err ) {
            console.error( err );
        }

        req.flash( 'success', {msg: i18n.__('Todo added.')} );

        res.redirect( '/' );
    } );
};
