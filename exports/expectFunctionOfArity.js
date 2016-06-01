const expectEqual = require('./expectEqual')
const expectFunction = require('./expectFunction')

function expectFunctionOfArity(arity, value) {
	expectFunction(value)
	expectEqual(arity, value.length)
	return value
}

module.exports = expectFunctionOfArity
