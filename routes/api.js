var api = require('../api')
module.exports = function(express) {
	var router = express.Router();
	router.get('/test', function(req, res, next) {
		res.send('test')
	})
	router.get('/model',api.test)

	return router
}