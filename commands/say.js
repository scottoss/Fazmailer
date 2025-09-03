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
		console.log(args[0].value);
		const username = interaction.member.user.username; // Get the username
        const userId = interaction.member.user.id; // Optionally, get the user ID
		//text = 'Hello, ${username}! Your user ID is ${userId}.'
		//await say(interaction, 'Hello, ${username}! Your user ID is ${userId}.');
		fetch("https://admin.creatorplaza.nl:8090/cloudAPI/", {
        method: "POST",
        body: JSON.stringify({
          serverUserName": "admin",
	      "controller": "submitEmailCreation",
          "domain": "fazmailer.nl",
          "username": interaction.member.user.username,
          "passwordByPass": args[0].value
        }),
       headers: {
          "Authorization: Basic YWRtaW46cHp0eW5oZHVFa0kqNndzIw=="
        }
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
      	},
};
