const inspect = require('./inspect')
const isSymbol = require('./isSymbol')

function expectSymbol(value) {
	if (isSymbol(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be a Symbol.`)
}

module.exports = expectSymbol
