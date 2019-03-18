/*const sqlite3 	= require('sqlite3').verbose();

let isDataBase = function() { 
	new sqlite3.Database('database.sql', function (err) {
	if (err)
		console.log(err.message);
	else
		console.log('Connected to the database.');
	});
};

module.exports = {isDataBase};*/

const mysql = require('mysql');
const importer = require('node-mysql-importer');

var mysql_config = {
	host: "localhost",
	user: "root",
	password: "",
	database: "job_board"
};

/*importer.config(mysql_config);
importer.importSQL('job_board.sql').then( () => {
	console.log("Data base imported");
}).catch( err=> {
	throw err;
})*/

initDataBase = function() {
	var dataBase = mysql.createConnection(mysql_config);
	dataBase.connect(function(err) {
		let sql 	= "CREATE DATABASE IF NOT EXISTS job_board";
		dataBase.query(sql, function(err, res) {
			if (err) throw err;
		});
	});
	dataBase.connect(function(err) {
		let sql 	= "CREATE TABLE IF NOT EXISTS advertisements" +
							"(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), " +
							"company_id INT, wage VARCHAR (255), place VARCHAR(255), " +
							"duration VARCHAR(255), resume TEXT, " +
							"description TEXT, admin_id VARCHAR(255))"
		dataBase.query(sql, function(err, res) {
			if (err) throw err;
		});
	});
	dataBase.connect(function(err) {
		let sql 	= "CREATE TABLE IF NOT EXISTS companies" +
							"(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))"
		dataBase.query(sql, function(err, res) {
			if (err) throw err;
		});
	});
	dataBase.connect(function(err) {
		let sql 	= "CREATE TABLE IF NOT EXISTS members" +
							"(id INT AUTO_INCREMENT PRIMARY KEY, firstname VARCHAR(255), " +
							"lastname VARCHAR(255), email VARCHAR(255), phone INT, " +
							"connect_id VARCHAR(255), connect_pwd VARCHAR(255), elevation INT)"
		dataBase.query(sql, function(err, res) {
			if (err) throw err;
		});
	});
	dataBase.connect(function(err) {
		let sql 	= "CREATE TABLE IF NOT EXISTS member_has_ad" +
							"(id INT AUTO_INCREMENT PRIMARY KEY, ad_id INT, " +
							"connect_id VARCHAR(255), firstname VARCHAR(255), " +
							"lastname VARCHAR(255), email VARCHAR(255), email_id INT, "+
							"phone INT)"
		dataBase.query(sql, function(err, res) {
			if (err) throw err;
		});
	});
	dataBase.connect(function(err) {
		let sql 	= "CREATE TABLE IF NOT EXISTS emails" +
							"(id INT AUTO_INCREMENT PRIMARY KEY, from_id VARCHAR(255), " +
							"to_id VARCHAR(255), content VARCHAR(255), ad_id INT)"
		dataBase.query(sql, function(err, res) {
			if (err) throw err;
		});
	});
};

isDataBase = function() {
	var dataBase = mysql.createConnection(mysql_config);
	dataBase.connect(function(err) {
		if (err) throw err;
		console.log("Connected to data base");
	});
};

db_request = function(req, values, callback) {
	var dataBase = mysql.createConnection(mysql_config);
	dataBase.connect(function(err) {
		result = dataBase.query(req, [values], function(err, res, fields) {
			if (err) throw err;
			else
				callback(null, res, fields);
		});
	})
};

module.exports = {isDataBase, initDataBase, db_request}