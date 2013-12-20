
var child = require('child_process');
var machine = require('space-machine');

module.exports = function (command, options) {
	var args = machine(command);
	var program = args.shift();

	return child.spawn(program, args, options);
};
