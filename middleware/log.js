const { now } = require('../utils');
const fs = require('fs').promises;
/**
 * Logs each API request 
 */
function log(req, _res, next) {
	const msg = `${now()} - ${req.method} - ${req.path} - ${req.ip}`;
	console.log(msg);
	fs.appendFile(`logs/${now(new Date(), true)}.log`, `${msg}\n`);
	next();
}
module.exports = log;