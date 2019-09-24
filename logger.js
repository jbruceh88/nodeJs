const EventEmitter = require ('events');

var url ="http://mylogger.io/log";

class Logger extends EventEmitter{
	log(message){
		//send hhtp request
		console.log(message);
		this.emit('messageLoaded', {message: 'POP'});
	}
}

module.exports = Logger;
