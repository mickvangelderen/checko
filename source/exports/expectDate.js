const inspect = require('./inspect')
const isDate = require('./isDate')

function expectDate(value) {
	if (isDate(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be a Date.`)
}

module.exports = expectDate
