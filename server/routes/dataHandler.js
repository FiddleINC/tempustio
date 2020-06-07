var express = require('express');
var nodeMailer = require('nodemailer');
var handlebars = require('handlebars');
var fs = require('fs');
var inlinecss = require('inline-css');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;

require('dotenv').config();

const uri = process.env.DB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

/** 
* Read the Handlerbars HTML File
* @param {string} path The path for the HTML File
* @param {function} callback the callback function for the file
*/
var readHTMLFile = (path, callback) => {
	fs.readFile(path, { encoding: 'utf-8' }, (err, html) => {
		if (err) {
			throw err;
			callback(err);
		} else {
			callback(null, html);
		}
	});
};

/**
 * Capitalise a Letter
 * @param {string} str The String to be capitalised 
 */
const capital_letter = (str) => {
	str = str.split(' ');

	for (var i = 0, x = str.length; i < x; i++) {
		str[i] = str[i][0].toUpperCase() + str[i].substr(1);
	}

	return str.join(' ');
};

client.connect((err) => {
	if (err) {
		return console.log(err);
	} else {
		console.log('Connected to Database');
	}
	const collection = client.db('registration').collection('forms');

	//GET Handler
	router.get('/', (req, res, next) => {
		collection
			.find()
			.toArray()
			.then((results) => {
				res.json(results);
			})
			.catch((error) => {
				console.error(error);
			});
	});

	//POST Handler
	router.post('/', (req, res, next) => {
		var data = req.body;
		data.id = Date.now();
		collection
			.insertOne(data)
			.then((result) => {
				var transporter = nodeMailer.createTransport({
					host: 'smtp.gmail.com',
					port: 465,
					secure: true,
					auth: {
						user: process.env.MAIL_USER,
						pass: process.env.MAIL_PASSWORD
					}
				});
				readHTMLFile(__dirname + '/messageLayout/index.html', (err, html) => {
					var template = handlebars.compile(html);
					var htmlToSend = template({
						id: data.id,
						name: capital_letter(data.name),
						mobile: data.mobile,
						type: data.type,
						tickets: data.tickets
					});

					//Adding CSS to the file
					inlinecss(htmlToSend, { url: ' ' })
						.then((html) => {
							var mailOptions = {
								to: data.email,
								subject: 'Event Registration on Tempustio [Reference ID : TEM' + data.id + ']',
								html: html
							};

							transporter.sendMail(mailOptions, (error, info) => {
								if (error) {
									return console.error(error);
								}
								res.json({
									id: data.id
								});
							});
						})
						.catch((err) => {
							console.error(err);
						});
				});
			})
			.catch((error) => {
				console.error(error);
			});
	});

	//DELETE handler
	router.delete('/', (req, res, next) => {
		collection
			.deleteMany({})
			.then((results) => {
				res.send('Deleted');
			})
			.catch((err) => {
				console.error(err);
			});
	});
});

module.exports = router;
