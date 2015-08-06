/**
 * middleware/index.js
 * All middleware are here to import all of them just with one command
 * in the main app.js
 * Note that maybe this is not always desirable if you want to apply
 * any other middleware in a different order into app.js file.
 */
var logrequest = require('./logrequest');
var sessions = require('./sessions');

module.exports = function (app) {
	app.use(logrequest);
    app.use(sessions);
}

