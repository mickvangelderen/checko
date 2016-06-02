import expectEqual from './expectEqual'
import expectFunction from './expectFunction'

function expectFunctionOfArity(arity, value) {
	expectFunction(value)
	expectEqual(arity, value.length)
	return value
}

export default expectFunctionOfArity
