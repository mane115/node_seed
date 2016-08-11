module.exports = function(mongoose, mongo) {
	var schema = new mongoose.Schema({
		username: {
			type: String,
			unique: true
		},
		password: String
	})
	var modle = mongo.model('Account',schema);
	// var ghost_followers = ghost.model('Follow', ghost_followersSchema);

	return modle
}