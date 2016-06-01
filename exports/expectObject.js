const inspect = require('./inspect')
const isObject = require('./isObject')

function expectObject(value) {
	if (isObject(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be an object.`)
}

module.exports = expectObject
