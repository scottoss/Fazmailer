module.exports = {
	name: "say",
	description: "Say command.",
	options: [
		{
			name: "Text",
			description: "You can print something on the bot.",
			type: 3,
			required: true,
		},
	],
	async execute(_bot, say, interaction, args) {
		const username = interaction.user.username; // Get the username
        const userId = interaction.user.id; // Optionally, get the user ID
		await interaction.reply(`Hello, ${username}! Your user ID is ${userId}.`);
	},
};
