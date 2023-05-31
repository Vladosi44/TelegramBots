const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf('6295185014:AAEo8R0Glw8SM2h_kqE7yiiKW8WbAVmiaC4');

bot.start((ctx) => {
    ctx.reply('Привет, если ты хочешь что-то узнать, набери команду /help!');
});

bot.command('help', (ctx) => {
    ctx.reply('Список доступных команд: \n\n' +
    '/hello - поздароваться \n' +
    '/bye - попрощаться \n' +
    '/random - случайное число \n' +
    '/howareyou - спросить "Как дела?" \n' +
    '/smile - случайный смайлик');
});

bot.command('hello', (ctx) => {
    ctx.reply('Привет!');
});

bot.command('bye', (ctx) => {
    ctx.reply('Пока<3');
});

bot.command('random', (ctx) => {
    const randomNum = Math.floor(Math.random() * 100);
    ctx.reply(`Случайное число: ${randomNum}`);
});

bot.command('howareyou', (ctx) => {
    ctx.reply('Как дела?');
});

bot.command('smile', (ctx) => {
    const smileys = ['😊', '😜', '😍', '🤪', '🤩', '😇', '🤔'];
    const randomIndex = Math.floor(Math.random() * smileys.length);
    ctx.reply(smileys[randomIndex]);
});

bot.launch();