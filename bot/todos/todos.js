"use strict";

module.exports = (bot) => {

    // With the controller and the bot as params we can start making the bot do things.
    // For example; here we listen for the message "todos" and respond with a list of the latest 10 todos.
    bot.botkit.hears(i18n.__('todos'),['direct_message','direct_mention','mention'], (bot,message) => {

        database.getTodos( (err, todos) => {

            if (err) {
                bot.reply(message, i18n.__("I am not able to do that now."));
                return;
            }

            var lastestTodos = todos.reverse().slice(-10)
            var latestDesc = lastestTodos.map( todo => todo.desc );
            var latestReply = latestDesc.join("\n");

            bot.reply(message,latestReply);
        });
    });

};
