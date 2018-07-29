let io = require('/socket.io/socket.io.js');
let Coraline = require('coraline-client');
let $ = require('jquery');


module.exports = (async function (Lang) {
	let pad = await (new Coraline(io())).login(+prompt("Insert the ID"));

	$(document.body).append($('<button>Presioname!</button>').click(() => pad.message('ping')));
});