"use strict";

module.exports = (app) => {

    // Here you receive an express instance and should setup your routing.
    // Import controllers and attach to express with paths.

    var todosController = require( ROOT + '/web/controllers/todos' );
    app.get( '/', todosController.getTodos );
    app.post( '/', todosController.addTodo );
};
