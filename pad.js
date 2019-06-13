let io = require('socket.io-client/dist/socket.io.js');
let Coraline = require('coraline-client');

module.exports = (async function (Lang, id) {
	let pad = await (new Coraline(io.connect('http://localhost:9080'))).login(id);

	document.write("You are in Pad Mode");

	/* TODO: Your pad code goes here */
});