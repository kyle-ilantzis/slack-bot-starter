"use strict";

var Botkit = require( 'botkit' );
var CronJob = require( 'cron' ).CronJob;

var controller = Botkit.slackbot( {
    debug: false
} );

var bot = controller.spawn( {
    token: process.env.SLACK_API_TOKEN
} ).startRTM();

// This is how you should add functionality to your bot.
// Define a new module in seperate a file that exports a function accepting the bot.
require(ROOT + '/bot/todos/todos.js')(bot);

new CronJob( '* * * * *', function () {
}, null, true, 'America/Montreal' );
