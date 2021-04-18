const { camelJoin } = require('../../utils');
const charmaps = require('./charmaps');

/**
 * Formats a string with bold/italic/serif
 * @param {string} str The string to format
 * @param {boolean} italic Whether to make the string italic
 * @param {boolean} bold Whether to make the string bold
 * @param {boolean} serif Whether to use serif or sans serif characters
 * @returns {string} The formatted string
 */
function format(str, italic, bold, serif) {
	const words = [];
	if (!italic && !bold)
		return str;
	if (italic)
		words.push('italic');
	if (bold)
		words.push('bold');
	words.push(serif ? 'serif' : 'sans');

	const key = camelJoin(...words);
	const charmap = charmaps[key];
	const formatted = textMap(str, charmap);
	return formatted;
}
module.exports.format = format;

/**
 * Converts each character of a string with the corresponding one in the provided charmap
 * @param {string} str The string to transform
 * @param {Record<string, string>} charmap The charmap to get the converted characters from
 * @returns {string} The converted tstring
 */
function textMap(str, charmap) {
	let mapped = '';
	str.split('').forEach(s => {
		const char = charmap[s];
		mapped += char ? char : s;
	});
	return mapped;
}