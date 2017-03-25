//getting npm packages ready
var express = require('express');
var bodyParser = require("body-parser");
var path = require("path");

//setting up router for implementation
var router = express.Router();
var burger = require('../model/burger.js');


// //setting up the packages to be used by express 
// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({ extended: true }));
// router.use(bodyParser.text());
// router.use(bodyParser.json({ type: "application/vnd.api+json" }));


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

router.post("/add_burger", function(req, res){
	burger.create()
})

router.put("/:id", function(req, res) {
		console.log(req.params.id)
		console.log("devoured", req.body.devoured)
		burger.update([req.body.devoured], [req.params.id], function(data){
			
			var burger = {
				burgers: data
			}
			res.redirect("/");
		})
 
});

router.post("/add_burger", function(req, res){
	burger.create()
})




module.exports = router;