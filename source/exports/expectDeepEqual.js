const inspect = require('./inspect')
const isDeepEqual = require('./isDeepEqual')

function expectDeepEqual(equal, value) {
	if (isDeepEqual(equal, value)) return value
	throw new TypeError(`Expected ${inspect(value)} to recursively equal ${inspect(equal)}.`)
}

module.exports = expectDeepEqual
