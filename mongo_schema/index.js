const mongoose = require('mongoose');
const config = require('../config');
const Promise = require('bluebird');
mongoose.Promise = Promise;
const mongo = mongoose.createConnection(config.mongodb);
mongo.on('open', function() {
	console.log('mongo init success')
});
mongo.on('error', function(err) {
	console.log(err)
});

const schema1 = require('./schema1')(mongoose, mongo)

module.exports = mongo