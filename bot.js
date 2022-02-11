const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });
const fs = require("fs");

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

const uwu = /uwu/i;
const owo = /owo/i;
const goodBot = /go+d bot/i;

client.on('messageCreate', async msg => {
    // This block will prevent the bot from responding to itself and other bots
    if (msg.author.bot) {
        return
    }

    const c = msg.content;

    // Check if the message starts with '!hello' and respond with 'world!' if it does.
    if ((uwu.test(c) || owo.test(c)) && msg.member.kickable) {
        msg.member.kick()
        await msg.reply(`${msg.author.username} has been kicked due to use of illegal words.`)
    }

    if (goodBot.test(c)) {

        await msg.reply("Thank you, finally someone appreciates my work. Your social credit score has been increased.")

    }

});

client.login(fs.readFileSync("auth.txt").toString().trim());
