var mongo = require('../mongo_schema');
var Promise = require('bluebird');
var test = function(req, res, next) {
	// mongo.models.Account.find({}).then(console.log)
	mongo.models.Account.find().then(result=>{
		console.log(result)
	})
	res.send('test 2')
}

module.exports = {
	test
}