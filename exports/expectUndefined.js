const inspect = require('./inspect')
const isUndefined = require('./isUndefined')

function expectUndefined(value) {
	if (isUndefined(value)) return value
	throw new RangeError(`Expected ${inspect(value)} to equal undefined.`)
}

module.exports = expectUndefined
