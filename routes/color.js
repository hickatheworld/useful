const { Router } = require('express');
const { cap } = require('../utils');
const { COLOR_FORMATS } = require('../api/color/parsers');
const parsers = require('../api/color/parsers');
const converters = require('../api/color/converters');
const { visualizeColor } = require('../api/color/visualize');

const router = new Router();

/**
 * Checks if a given color format is supported by the API and sends a 400 error if it is not
 * @param {string} format A color format
 * @param {Express.Response} res The response to send a 400 error if the format is not supported
 * @returns {boolean} Whether the format is supported by the API or not
 */
function checkFormat(format, res) {
	if (!COLOR_FORMATS.includes(format.toLowerCase())) {
		res.status(400).json({ success: false, error: `${format} is not a supported color format.` });
		return false;
	}
	return true;
}

/**
 * Parses a color in the given format and sends a 400 error if it couldn't be parsed
 * @param {string} format A color format
 * @param {string} color A color
 * @param {Express.Response} res The response to send a 400 error if the color can't be parsed
 * @returns {?string} The parsed color
 */
function parseColor(format, color, res) {
	const parsed = parsers[`parse${cap(format)}`](color);
	if (!parsed) {
		res.status(400).json({ success: false, error: `${color} is not a valid ${format.toLowerCase()} color` });
		return null;
	}
	return parsed;
}

router.get('/convert/:from/:to/:color', function (req, res) {
	const from = req.params.from;
	const to = req.params.to;
	let color = req.params.color;

	if (!checkFormat(from, res) || !checkFormat(to, res))
		return;
	color = parseColor(from, color, res);
	if (!color)
		return;
	if (from.toLowerCase() === to.toLowerCase())
		return res.status(200).json({ success: true, color });

	const converted = converters[`${from.toLowerCase()}To${cap(to)}`](color);
	res.status(200).json({ success: true, color: converted });
});

router.get('/visualize/:format/:color', async function (req, res) {
	const format = req.params.format;
	let color = req.params.color;

	if (!checkFormat(format, res))
		return;
	color = parseColor(format, color, res);
	if (!color)
		return;
	if (format.toLowerCase() !== 'hex')
		color = converters[`${format.toLowerCase()}ToHex`](color);

	let width = parseInt(req.query.width || req.query.w);
	let height = parseInt(req.query.height || req.query.h);
	// This ensures a correct value (not smaller than 1)
	width = Math.max(width, 1);
	height = Math.max(height, 1);
	if (!(width && height) && (width || height)) {
		if (!isNaN(width))
			height = width;
		else
			width = height;
	} else if (!(width && height)) {
		width = height = 64;
	}
	// This prevents server outage with a too big image
	width = Math.min(width, 1024);
	height = Math.min(height, 1024);

	const img = await visualizeColor(`#${color}`, width, height);
	res.writeHead(200, {
		'Content-Type': 'image/jpg',
		'Content-Length': img.length,
	});
	res.end(img);
});

module.exports = router;