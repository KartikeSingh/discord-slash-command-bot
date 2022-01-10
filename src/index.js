const { Client } = require('discord.js');
const { config } = require('dotenv');
const { Handler } = require('discord-slash-command-handler');

config();

const client = new Client({ intents: ["GUILDS"] });

client.handler = new Handler(client, {
    commandFolder: './commands',
    eventFolder: './events',
    commandType: 'file',
    allSlash: true,
    autoDefer: false,
    handleSlash: true,
    slashGuilds: ["926705336675631195"],
    runParameters: ["1", "4"],
})

client.login(process.env.TOKEN)