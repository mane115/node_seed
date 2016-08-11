const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const routes = require('./routes');

var initMidWare = function(app) {
	//init routes
	app.use(routes.baseUrl, routes.baseUrlApi(express));
	//req.body
	app.use(bodyParser.json())
}


initMidWare(app)

app.listen(3000)