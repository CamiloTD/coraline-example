let io = require('/socket.io/socket.io.js');
let Coraline = require('coraline-client');
let $ = require('jquery');

module.exports = (async function (Lang) {
	let screen = await (new Coraline(io())).create({});

	document.write("<b>El ID de conexion es: </b>" + screen.id + "<br>");

	screen.onmessage('ping', (client_id) => {
		document.write("Pinged!!<br>");
	});
});