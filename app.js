const irc = require('irc'),
	bonkConfig = require('./bonkConfig.json');

const client = new irc.Client(bonkConfig.server, bonkConfig.nick, bonkConfig.options);

client.connect();
