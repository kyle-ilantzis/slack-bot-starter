# Slack bot starter

This provides a slack bot starter with a web server.

The bot will be coded using [botkit](https://github.com/howdyai/botkit).

The webserver is using [express](http://expressjs.com/) with [jade](http://jade-lang.com/) as the template engine and [sass](http://sass-lang.com/) as the stylesheet engine.

The database is [postgresql](http://www.postgresql.org/) using [knex](http://knexjs.org/) for interfacing with postgresql.

# Installation

Git clone this repo

    $> git clone git@github.com:kyle-ilantzis/slack-bot-starter.git my-bot

Copy [.env.example](.env.example) to the **.env** file

    $> cp .env.example .env

Edit the **.env** file with your slack api token and postgres credentials

    SLACK_API_TOKEN=xoxb-00000000000-ABCDEFGHIJKLMNOP
    POSTGRES_URL=postgres://username:password@host:port/mybot

Install dependencies

    $> npm install

Create the database tables

    $> npm install -g knex
    $> knex migrate:latest

Run the app

    $> node app.js

If all goes well you should have a bot connected to slack and a webserver running.

This starter kit starts with the most basic todo application. A webserver at localhost:3000 lists all todos and lets you add todos.

The bot can be told "todos" and then lists all todos on slack.

You are now ready to code your bot!

** Web server **

![todo-webserver](todo-webserver.png)

** Slack bot **

![todo-slackbot](todo-slackbot.png)

# How to

Below is a list of notes on how the starter kit was perceived.

## Global variables

To get you started faster some global variables are setup for you in [app.js](app.js).

* **ROOT**: the path to the project directory.
* **lodash**: as _ in the code, everyone likes lodash.
* **async**: help you with your async needs.
* **i18n**: help you with your localization needs.
* **database**: to be used by both the bot and web server.
* **bot**: to be used by the web server.

You would use these variables as follows:

    i18n.__('Todos');

    ...

    database.getTodos( (err, todos ) => ... );

No require statements needed.

## Database

Knex describes [migrations](http://knexjs.org/#Migrations-CLI) very well.
That is how you should be creating your database schema.

To add functions on the 'database' global variable view the files
[database/database.js](database/database.js)
and
[database/todos/todos.js](database/todos/todos.js)
for how the approach is done.

## Bot

Botkit describes very well [here](https://github.com/howdyai/botkit)
the api to program your bot.

To add functions on your bot view
[bot/bot.js](bot/bot.js)
and
[bot/todos/todos.js](bot/todos/todos.js)
for how the approach is done.

## Web server

The express web server is setup in [web/web.js](web/web.js).

To add controllers to your web server see [web/routes.js](web/routes.js) and
[web/controllers/todos.js](web/controllers/todos.js)

Views live in the [web/views](web/views) folder. Your controllers
use req.render( 'path/to/view', ... ) with "path/to/view" being relative to the web/views folder.

When the server boots all sass stylesheets are compiled to css that our placed beside its sass equivalent.

## Requires

For reasons of being consistent the starter kit favors fully qualified require statements. The ROOT global variable is used to define paths relative to the project's directory.

Requires then look like this:

    require(ROOT + '/database/todos/todos.js')(knex,database);

# LICENSE

MIT
