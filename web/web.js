"use strict";

var express = require( 'express' );
var bodyParser = require( 'body-parser' );
var sass = require( 'node-sass-middleware' );
var path = require( 'path' );
var flash = require( 'express-flash' );
var session = require( 'express-session' );
var logger = require( 'morgan' );

var app = express();

// logging
app.use( logger( 'dev' ) );

// public folder for images, css,...
app.use( express.static( __dirname + '/public' ) );

// parsing
app.use( bodyParser.json() ); // for parsing application/json
app.use( bodyParser.urlencoded( {extended: true} ) ); // for parsing url encoded

// view engine jade
app.set( 'view engine', 'jade' );
app.set( 'views', path.join( __dirname, 'views' ) );
app.locals.basedir = path.join( __dirname, 'views' );

// sass to css
app.use( sass( {
    src: path.join( __dirname, 'public' ), dest: path.join( __dirname, 'public' ), sourceMap: true
} ) );

// flash messages
app.use( session( {
    secret: 'keyboard cat'
} ) );
app.use( flash() );

require(ROOT + '/web/routes.js')(app);

app.set( 'port', process.env.PORT || 3000 );

//START ===================================================
app.listen( app.get( 'port' ), function () {
    console.log( 'Express server listening on port %d in %s mode', app.get( 'port' ), app.get( 'env' ) );
} );
