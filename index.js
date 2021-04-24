require('dotenv').config();
const fs = require('fs');
const express = require('express');
const app = express();

if (!fs.existsSync('logs'))
	fs.mkdirSync('logs');

app.use(express.json());
app.use(require('./middleware/log'));
app.use('/color', require('./routes/color'));


// eslint-disable-next-line no-undef
const PORT = process.env.PORT;
app.listen(PORT, function () {
	console.log(`Listening on :${PORT}`);
});