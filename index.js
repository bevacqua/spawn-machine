
var spawn = require('child_process').spawn;
var machine = require('space-machine');

module.exports = function (command, options) {
	var args = machine(command);
	var program = args.shift();

	spawn(program, args, options);
};
