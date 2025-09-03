module.exports = {
	name: "say",
	description: "Say command.",
	options: [
		{
			name: "text",
			description: "You can print something on the bot.",
			type: 3,
			required: true,
		}
	],
	async execute(_bot, say, interaction, args) {
		console.log(interaction.member.user.username);
		const username = interaction.member.user.username; // Get the username
        const userId = interaction.member.user.id; // Optionally, get the user ID
		text = 'Hello, ${username}! Your user ID is ${userId}.'
		await say(interaction, text);
	},
};
