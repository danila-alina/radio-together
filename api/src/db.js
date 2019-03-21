const config = require('config/config');
const db = require('monk')(config.mongo.connection);

module.exports = db;