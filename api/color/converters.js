const { parseRgb, parseHex } = require('./parsers');

/**
 * Converts an hexadecimal string to rgb array
 * @param {string} hex The hexadecimal string to convert
 * @returns {?number[]} The converted rgb array
 */
function hexToRgb(hex) {
	hex = parseHex(hex);
	if (!hex)
		return null;
	const rgb = [];
	for (let i = 1; i < hex.length; i += 2) {
		rgb.push(parseInt(hex.slice(i - 1, i + 1), 16));
	}
	return rgb;
}
module.exports.hexToRgb = hexToRgb;


/**
 * Converts a RGB string to hexadecimal color string
 * @param {string} rgb The RGB string to convert
 * @returns {?string} The converted hexadecimal string
 */
function rgbToHex(rgb) {
	rgb = parseRgb(rgb);
	if (!rgb)
		return null;
	let hex = '';
	// Adding a 0 if the hexadecimal value is 1-character long
	rgb.forEach(n => hex += (n < 16 ? '0' : '') + n.toString(16));
	return hex.toUpperCase();
}
module.exports.rgbToHex = rgbToHex;