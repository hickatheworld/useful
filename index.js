require('dotenv').config();
const fs = require('fs');
const express = require('express');
const fileupload = require('express-fileupload');
const app = express();

if (!fs.existsSync('logs'))
	fs.mkdirSync('logs');

app.use(express.json());
app.use(fileupload({
	limits: {
		fileSize: 2 * 1024 * 1024
	},
	limitHandler: function (_req, res) {
		res.status(400).json({ success: false, error: 'File is too big. Must be 2MB or lower.' });
	}
}));
app.use(require('./middleware/log'));
app.use('/color', require('./routes/color'));


// eslint-disable-next-line no-undef
const PORT = process.env.PORT;
app.listen(PORT, function () {
	console.log(`Listening on :${PORT}`);
});