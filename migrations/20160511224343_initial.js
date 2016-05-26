exports.up = function ( knex, promise ) {
    return promise.all( [knex.schema.createTable( 'todos', function ( t ) {
        t.increments();
        t.specificType( 'desc', 'VARCHAR' ).notNullable();
    } )] );
};

exports.down = function ( knex, promise ) {
    return promise.all( [knex.schema.dropTable( 'todos' )] );
};
