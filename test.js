const http = require('http');
const path = require('path');
const express = require('express');
const socket_io = require('socket.io');
const Coraline = require('coraline-core');
const opn = require('opn');

const PORT = 8081;

let app = express();
let server = http.Server(app);
let io = socket_io(server);

app.use(function (rq, rs, next) {
	let { url } = rq;
	if(url.substring(url.length -4) === '.kmi') {
		rs.end(`
			<!DOCTYPE html>
			<html>
			<head>
			</head>
			<body>
				<script src="/kmi_modules/require.kmi.js"></script>

				<meta kmi-init="${url.substring(0, url.length - 4)}">
			</body>
			</html>
		`);
	} else next();
});

app.use(express.static('public'));

server.listen(PORT, () => {
	console.log("Server is listening at port :" + PORT);
	opn('http://localhost:' + PORT + '/test.kmi');
});

Coraline.createServer(io, { password: 'C0ral1n3' });