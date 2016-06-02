const inspect = require('./inspect')
const isWeakSet = require('./isWeakSet')

function expectWeakSet(value) {
	if (isWeakSet(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be a WeakSet.`)
}

module.exports = expectWeakSet
