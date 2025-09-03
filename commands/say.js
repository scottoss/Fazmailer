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
		var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic 4e40c4c524743f04b40a65a4eddac12a6a1b54e109512cf3f52d925d39cda2e5");
		//console.log(interaction.member.user.username);
		//console.log(args[0].value);
		const username = interaction.member.user.username; // Get the username
        const userId = interaction.member.user.id; // Optionally, get the user ID
		//text = 'Hello, ${username}! Your user ID is ${userId}.'
		//await say(interaction, 'Hello, ${username}! Your user ID is ${userId}.');
		fetch("https://admin.creatorplaza.nl:8090/cloudAPI/", {
        method: "POST",
        body: JSON.stringify({
          "serverUserName": "admin",
	      "controller": "submitEmailCreation",
          "domain": "fazmailer.nl",
          "username": interaction.member.user.username,
          "passwordByPass": args[0].value
        }),
       headers: myHeaders,
      })
        .then((response) => response.json())
        .then((json) => console.log(json))
		.then((json) => console.log(status));
      	},
};
