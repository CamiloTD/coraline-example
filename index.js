let io = require('socket.io-client/dist/socket.io.js');
let Coraline = require('coraline-client');

module.exports = (async function (Lang) {
	let screen = await (new Coraline(io.connect('http://localhost:9080'))).create("", { });
	let screen_id = screen.id;

	/* TODO: Your screen code goes here */
});