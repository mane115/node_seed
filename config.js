const config = {
	server: {
		mongodb: 'mongodb://127.0.0.1/seed'
	},
	develope: {
		mongodb: 'mongodb://127.0.0.1/seed'
	}
}
const environment = process.env.NODE_ENV || 'develope';
module.exports = config[environment]