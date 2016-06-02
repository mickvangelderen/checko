const inspect = require('./inspect')
const isFunction = require('./isFunction')

function expectFunction(value) {
	if (isFunction(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be a Function.`)
}

module.exports = expectFunction
