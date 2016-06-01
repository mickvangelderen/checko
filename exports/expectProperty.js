const inspect = require('./inspect')

function expectProperty(name, value) {
	if (name in value) return value
	throw new TypeError(`Expected ${inspect(value)} to have property ${inspect(name)}.`)
}

module.exports = expectProperty
