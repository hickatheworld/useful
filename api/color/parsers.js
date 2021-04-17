/**
 * Parses an hexadecimal color code
 * @param {string} str A string to parse a color code from
 * @returns {?string} The parsed color code or null if there was no hexadecimal in the string
 */
function parseHex(str) {
	const HEX_CODE_MATCH = /^ *#?((([a-f]|\d){6})|(([a-f]|\d){3})) *$/gi;
	const match = HEX_CODE_MATCH.exec(str.toUpperCase());
	if (!match)
		return null;
	const code = match[1];

	return (code.length === 3)
		// Doubling each character if a short hex code was provided
		? code.split('').map(c => `${c}${c}`).join('')
		: code;
}
module.exports.parseHex = parseHex;

/**
 * Parses a RGB color code 
 * @param {string} str A string to parse a color code from
 * @returns {?number[]} The array of the RGB values or null if there was no correct RGB in the string
 */
function parseRgb(str) {
	const RGB_CODE_MATCH = /^ *(-?\d{1,3}) *, *(-?\d{1,3}) *, *(-?\d{1,3}) *$/gi;
	const match = RGB_CODE_MATCH.exec(str);
	// 3 numeric values + the global match
	if (!match || match.length < 4)
		return null;
	const values = match.slice(1, 4).map(val => parseInt(val));
	// Each value must be between 0 and 255 for a RGB code
	if (values.some(n => n < 0 || n > 255))
		return null;
	return values;
}
module.exports.parseRgb = parseRgb;

/**
 * The color formats supported by the API
 */
module.exports.COLOR_FORMATS = ['hex', 'rgb'];
