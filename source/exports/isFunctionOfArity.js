import isFunction from './isFunction'

function isFunctionOfArity(arity, value) {
	return isFunction(value) && value.length === arity
}

export default isFunctionOfArity
