const inspect = require('./inspect')
const isSet = require('./isSet')

function expectSet(value) {
	if (isSet(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be a Set.`)
}

module.exports = expectSet
