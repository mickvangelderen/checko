const inspect = require('./inspect')
const isNumber = require('./isNumber')

function expectNumber(value) {
	if (isNumber(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be a number.`)
}

module.exports = expectNumber
