module.exports = {
    name: "help", // Name of the command

    description: "Get some help", // Description of the command

    run: async (client, interaction) => {
        interaction.reply(`ping is ${client.ws.ping}`)
    }
}