var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

var PORT =process.env.PORT || 4000;

var app = express();

app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var burgersController = require("./controller/burgersController.js");



app.use("/", burgersController);

app.listen(PORT, function(){
	console.log("Listening port "+ PORT)
});