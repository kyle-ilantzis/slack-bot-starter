"use strict";

require( 'dotenv' ).config();

if ( !process.env.SLACK_API_TOKEN ) {
    console.log( 'Error: Specify the SLACK_API_TOKEN environment variable.' );
    process.exit( 1 );
}

if ( !process.env.POSTGRES_URL ) {
    console.log( 'Error: Specify the POSTGRES_URL environment variable.' );
    process.exit( 1 );
}

GLOBAL.ROOT = __dirname;

GLOBAL._ = require( 'lodash' );

GLOBAL.async = require( 'async' );

GLOBAL.i18n = require( 'i18n' );
i18n.configure( {
    locales: ['en'],
    directory: __dirname + '/locales'
} );

GLOBAL.database = require( ROOT + '/database/database.js')

GLOBAL.bot = require( ROOT + '/bot/bot' );

require( ROOT + '/web/web' );
