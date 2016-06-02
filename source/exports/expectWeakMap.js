const inspect = require('./inspect')
const isWeakMap = require('./isWeakMap')

function expectWeakMap(value) {
	if (isWeakMap(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be a WeakMap.`)
}

module.exports = expectWeakMap
