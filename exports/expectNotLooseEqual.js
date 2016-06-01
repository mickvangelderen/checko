const inspect = require('./inspect')

function expectNotLooseEqual(equal, value) {
	if (value != equal) return value
	throw new RangeError(`Expected ${inspect(value)} to not loosely equal ${inspect(equal)}.`)
}

module.exports = expectNotLooseEqual
