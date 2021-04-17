const gm = require('gm');

/**
 * Generates an image visualizing a color
 * @param {string} hex The hexadecimal code of the color to visualize
 * @param {number} width The width of the generated image
 * @param {nuber} height The height of the generated image
 * @returns {Promise<Buffer>} The generated image Buffer
 */
async function visualizeColor(hex, width, height) {
	return new Promise((resolve, reject) => {
		gm(width, height, hex)
			.setFormat('jpeg')
			.toBuffer((err, buf) => {
				if (err)
					reject(err);
				else
					resolve(buf);
			});
	});
}
module.exports.visualizeColor = visualizeColor;
