/**
 * Uppercases the first letter of a string and lowercases the rest
 * @param {string} str The string to format
 * @returns {string} The formatted string
 */
function cap(str) {
	return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
module.exports.cap = cap;


/**
 * Formats a log-ready date-time
 * @param {Date} d The Date object to format. Current time if undefined
 * @param {boolean} dateOnly Whether to display only the date or the date-time
 * @returns {string} The formatted date-time 
 */
function now(d = new Date(), dateOnly = false) {
	// Makes 1 digit numbers 0 padded
	const z = n => (n < 9 ? '0' : '') + n;
	let str = `${d.getFullYear()}-${z((d.getMonth() + 1))}-${z(d.getDate())}`;
	if (dateOnly)
		return str;
	str += ` ${z(d.getHours())}:${z(d.getMinutes())}:${z(d.getSeconds())}`;
	return str;
}
module.exports.now = now;

/**
 * Concatenates string respecting camel case
 * @param  {...string} str The strings to concatenate 
 * @returns {string} The concatenated strings
 */
function camelJoin(...str) {
	return str.shift() + str.map(s => cap(s)).join('');
}
module.exports.camelJoin = camelJoin;