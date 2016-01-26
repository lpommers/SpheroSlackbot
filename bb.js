var Botkit = require('botkit');
var sphero = require("sphero");
var bb8 = sphero(process.env.SPHERO_ADDRESS); // change BLE address accordingly

var controller = Botkit.slackbot({
  debug: false
});

bb8.connect(function() {
  console.log('test here');
});

// connect the bot to a stream of messages
controller.spawn({
  token: process.env.BOT_TOKEN,
}).startRTM()

// give the bot something to listen for.
controller.hears('hello','direct_message,direct_mention,mention',function(bot,message) {

  bb8.color('#8e44ad');
  
  setInterval(function() {
    var direction = Math.floor(Math.random() * 360);
    bb8.roll(150, direction);
  }, 1000);

  bot.reply(message,'Hello yourself.');

});
