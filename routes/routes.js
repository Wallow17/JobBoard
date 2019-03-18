var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller.js');

isLoged = function(req, res, next) {
	if (req.session.elevation > 0)
		next();
	else {
		if (req.url == '/api')
			res.json({"result": "KO",
					"message" : "you must be administrator"});
		else
			res.redirect("/");
	}
}

router.use(function(req, res, next) {
	console.log("requesting...");
	if (!req.session.user)
		console.log("not logged in");
	else {
		console.log("logged in: " + req.session.user + ", level " + req.session.elevation);
	}
	next();
})

router.get('/api', controller.getAds);

router.post('/api', isLoged ,controller.newAd);

router.put('/api', isLoged,controller.updateAd);

router.delete('/api', isLoged, controller.deleteAd);

router.get('/', controller.getAds);

router.post('/signup', controller.signup);

router.get('/signup', controller.signup);

router.post('/login', controller.login);

router.get('/logout', controller.logout);

router.post('/apply', controller.apply);

router.post('/getOneAd', controller.getOneAd);

router.post('/getEmails', controller.getEmails);

module.exports = router;