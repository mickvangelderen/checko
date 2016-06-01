const inspect = require('./inspect')
const isRegExp = require('./isRegExp')

function expectRegExp(value) {
	if (isRegExp(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be a RegExp.`)
}

module.exports = expectRegExp
