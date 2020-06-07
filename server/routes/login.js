var express = require('express');
var router = express.Router();

require('dotenv').config();

router.post('/', (req, res, next) => {
	if (req.body.username === process.env.ADMIN_USER && req.body.password === process.env.ADMIN_PASSWORD) {
		res.send('Logged In');
	} else {
		res.send('Wrong');
	}
});

module.exports = router;
