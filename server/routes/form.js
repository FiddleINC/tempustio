var express = require('express');
var multer = require('multer');
var router = express.Router();

//File Upload Handler
var upload = multer({
	storage: multer.diskStorage({
		destination: function(req, file, cb) {
			cb(null, 'uploads');
		},
		filename: function(req, file, cb) {
			cb(null, file.fieldname + '-' + Date.now() + '.png');
		}
	}),
	onFileUploadStart: (file) => {
		console.log(file.originalname + ' is starting ...');
	},
	fileFilter: (req, file, cb) => {
		if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg') {
			cb(null, true);
		} else {
			cb(null, false);
			return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
		}
	}
});

router.post('/', upload.single('idcard'), (req, res, next) => {
	var data = {
		name: req.body.firstname + ' ' + req.body.lastname,
		mobile: req.body.mobile,
		email: req.body.email,
		type: req.body.regType,
		tickets: req.body.tickets,
		image: {
			contentType: req.file.mimetype,
			path: req.protocol + '://' + req.get('host') + '/api/' + req.file.path
		}
	};
	res.send(data);
});

module.exports = router;
