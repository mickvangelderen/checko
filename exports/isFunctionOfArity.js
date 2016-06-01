const isFunction = require('./isFunction')

function isFunctionOfArity(arity, value) {
	return isFunction(value) && value.length === arity
}

module.exports = isFunctionOfArity
