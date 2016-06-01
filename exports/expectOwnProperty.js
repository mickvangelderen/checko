const inspect = require('./inspect')
const hasOwnProperty = require('./hasOwnProperty')

function expectOwnProperty(name, value) {
	if (hasOwnProperty(name, value)) return value
	throw new TypeError(`Expected ${inspect(value)} to have own property ${inspect(name)}.`)
}

module.exports = expectOwnProperty
