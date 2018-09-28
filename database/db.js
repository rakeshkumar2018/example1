var mysql = require('mysql');

var obj={};
obj.getConnection=function(){
		var conn=mysql.createConnection({
		  	host: "localhost",
		  	user: "root",
		  	password: "",
		  	database: "ot"
		});
		return conn;
	}


module.exports = obj;