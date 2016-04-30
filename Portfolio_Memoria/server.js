#!/usr/bin/env node
var debug = require('debug')('Portfolio_Memoria');
var app = require('./app');

if(typeof process.env.OPENSHIFT_NODEJS_PORT === 'undefined'){
	app.set('port', process.env.PORT || 3000); 

	var server = app.listen(app.get('port'), function() {
		debug('Express server listening on port ' + server.address().port);
	});
} else {
	app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 3000);
	app.set('ip', process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');

	var server = app.listen(app.get('port'), app.get('ip'), function() {
		debug('Express server listening on port ' + server.address().port);
	});
}

