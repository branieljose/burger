//getting npm packages ready
var express = require('express');
var bodyParser = require("body-parser");
var path = require("path");

//setting up router for implementation
var router = express.Router();
var burger = require('../model/burger.js');



//Gets all burgers and their devoured status
router.get("/", function(req, res) {
		burger.all(function(data){
			// res.send(data);
			var burger = {
				burgers: data
			}
			res.render("index", burger)
			console.log("show_burger", data);
		})
 
});

//Adds new burgers to burger table
router.post("/add_burger", function(req, res) {

		burger.create( ["burger_name"], [req.body.name] , function(data){
			res.redirect("/");
		})
 
});

//When a burger is devoured its id is passed as a param, id is then used to find the burger to be updated as devoured. 
router.put("/:id", function(req, res) {
	
		burger.update([req.body.devoured], [req.params.id] , function(data){
			res.redirect("/");
		})
 
});





//exports router 
module.exports = router;