let db = require("../models/model.js")

exports.getAds = function(req, result) {
	db.db_request("SELECT * FROM advertisements ORDER BY id DESC", [], function(err, res, fields) {
		if (req.url == "/api")
			result.json(res);
		else if (req.session.elevation != 1) {
			result.render("index", {dbData: res, user: req.session.user}, function(err, html) {
				result.status(200).send(html);
			});
		} else {
			result.render("admin", {dbData: res, user: req.session.user, user_elevation: req.session.user.elevation}, function(err, html) {
				result.status(200).send(html);
			});
		}
	})
	console.log("Index reached");
}

exports.newAd = function(req, result) {
	var data = req.body, dataTab;

	if (!data.name || !data.company_id || !data.wage || !data.place || !data.duration || !data.resume || !data.description || !data.admin_id)
		result.json({"result": "KO",
				"message" : {	
								"content": "MUST BE :",
								"name": "name",
								"company_id": "company_id",
								"wage": "wage",
								"place": "place",
								"duration": "duration",
								"resume": "resume",
								"description": "description",
								"admin_id" : "admin_id"
							}
				});
	else {
		dataTab = [data.name, data.company_id, data.wage, data.place, data.duration, data.resume, data.description, data.admin_id];
		db.db_request("INSERT INTO advertisements(name, company_id, wage, place, duration, resume, description, admin_id) VALUES (?)", dataTab, function(err, res, fields) {
			if (err) {
				console.log(err);
			}
			else {
				result.json({"result": "OK",
						"message": "advertisement added"});
				console.log("Advertisement added");
			}
		});
	}
}

exports.updateAd = function(req, result) {
	var data = req.body, query;
	if (!data.id || !data.name || !data.company_id || !data.wage || !data.place || !data.duration || !data.resume || !data.description)
		result.json({"result": "KO",
				"message" : {	
								"content": "MUST BE :",
								"ad_id": "id",
								"name": "name",
								"company_id": "company_id",
								"wage": "wage",
								"place": "place",
								"duration": "duration",
								"resume": "resume",
								"description": "description"
							}
				});
	else {
		query = "UPDATE advertisements SET name = '" + data.name + 
									"', company_id = '" + data.company_id + 
									"', wage = '" + data.wage +
									"', place = '" + data.place +
									"', duration = '" + data.duration +
									"', resume = '" + data.resume +
									"', description = '" + data.description +
									"' WHERE id = " + data.id

		db.db_request(query, [], function(err, res, fields) {
			if (err) {
				console.log(err);
			}
			else {
				result.json({"result": "OK",
						"message": "advertisement updated"});
				console.log("Advertisement updated");
			}
		});
	}
}

exports.deleteAd = function(req, result) {
	var data = req.body;
	var dataTab = [data.id];
	if (!data.id)
		result.json({"result": "KO",
				"message" : {	
								"ad_id": "id"
							}
				});
	else {
		db.db_request("DELETE FROM advertisements WHERE id = ?", dataTab, function(err, res, fields) {
			if (err) {
				console.log(err);
			}
			else {
				result.json({"result": "OK",
						"message": "advertisement deleted"});
				console.log("Advertisement deleted");
			}
		});
	}
}

exports.logout = function(req, result) {
	req.session.user = undefined;
	req.session.elevation = -1;
	result.json({"result": "OK",
			"message": "disconnected"});
}

exports.login = function(req, result) {
	var data = req.body, dataTab;
	if (!data.connect_id || !data.connect_pwd)
		res.json({"result": "KO",
		"message" : {	
			"ID": "your connect id",
			"password": "your connect password"
		}
	});
	dataTab = [data.connect_id];
	db.db_request("SELECT * FROM members WHERE connect_id = ?", dataTab, function(err, res, fields) {
		if (err) throw err;
		if (!res[0]) {
			result.json({result: "KO",
						message: "No user match"});
			return;
		}
		if (res[0].connect_pwd == data.connect_pwd) {
			req.session.user = data.connect_id;
			req.session.elevation = res[0].elevation;
			result.json({result: "OK",
						message: "Logged in"});
		}
		else
			result.json({result: "KO",
						message: "password doesn't match"});
	})
}

exports.signup = function(req, result) {
	var data = req.body, dataTab;
	
	if (req.method == 'POST' && (!data.connect_id || !data.connect_pwd || !data.firstname || !data.lastname || !data.email || !data.phone || !data.elevation))
		result.json({"result": "KO",
		"message" : {
			"content": "MUST BE :",
			"connect_id": "your connect id",
			"connect_pwd": "your connect password",
			"firstname" : "firstname",
			"lastname" : "lastname",
			"email" : "email",
			"phone" : "phone"
		}
	});
	dataTab = [data.firstname, data.lastname, data.email, data.phone, data.connect_id, data.connect_pwd, data.elevation];
	
	if (req.method == "GET")
		result.render("signup", {user: req.session.user});
	else {
		db.db_request("SELECT * FROM members WHERE connect_id ='" + data.connect_id + "' OR email = '" + data.email +  "' OR phone = " + data.phone, [], function(err, res) {
			if (err) throw err;
			if (res[0]) {
				result.json({"result": "KO",
							"message": "user_id, email or phone already exists"});
			}
			else {
				db.db_request("INSERT INTO members (firstname, lastname, email, phone, connect_id, connect_pwd, elevation) VALUES (?)", dataTab, function(err, res, fields) {
					if (err) throw err;
					result.json({"result": "OK",
								"message": "User Signed up"});
				})
			}
		})
	}
}

sendMail = function(from, to, content, ad_id) {
	db.db_request("INSERT INTO emails(from_id, to_id, content, ad_id) VALUES (?)", [from, to, content, ad_id], function(err, res, fields) {
		if (err) throw err;
	})
}

exports.apply = function(req, result) {
	var data = req.body;
	var dataTab;
	var subscriber = req.session.user;
	
	console.log(data);
	if (!req.user.session)
		subscriber = data.firstname + " " + data.lastname;
	sendMail(subscriber, data.admin_id, data.content, data.ad_id)
	if (!req.session.user) {
		dataTab = [data.ad_id, "NULL", data.firstname, data.lastname, data.email, data.phone];
			db.db_request("INSERT INTO member_has_ad(ad_id, connect_id, firstname, lastname, email, phone) VALUE (?)", dataTab, function(err, res, fields) {
				if (err) throw err;
			})
		result.json({"result": "OK",
				"message": "query sent"});
	}
	else {
		db.db_request("SELECT * FROM members WHERE connect_id = ?", [req.session.user], function(err, res, fields) {
			dataTab = [data.ad_id, data.connect_id, res[0].firstname, res[0].lastname, res[0].email, res[0].phone];
			db.db_request("INSERT INTO member_has_ad(ad_id, connect_id, firstname, lastname, email, phone) VALUE (?)", dataTab, function(err, res, fields) {
				if (err) throw err;
			})
		});
		result.json({"result": "OK",
		"message": "query sent"});
	}
}

exports.getProfile = function(req, result) {
	db.db_request("SELECT * FROM members WHERE connect_id = ?", [req.session.user], function(err, res, fields) {
		result.json(res);
	})
}

exports.updateProfile = function(req, result) {
	data = req.body;
	dataTab = [];
	if (data.firstname)
		req = "UPDATE TABLE members SET firstname = " + data.firstname + "WHERE connect_id =" + data.connect_id;
}

exports.getEmails = function(req, result) {
	var data = req.body;

	db.db_request("SELECT * FROM emails WHERE to_id = ?", [data.admin_id], function(req, res, fields) {
		result.json(res);
	})
}

exports.getOneAd = function(req, result) {
	data = req.body;
	if (data.id) {
		db.db_request("SELECT * FROM advertisements WHERE id = ?", [data.id], function(req, res, fields) {
			result.json(res);
		})
	}
}