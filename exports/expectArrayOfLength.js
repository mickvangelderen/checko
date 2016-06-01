import expectArray from './expectArray'
import expectEqual from './expectEqual'

function expectArrayOfLength(length, value) {
	expectArray(value)
	expectEqual(length, value.length)
	return value
}

export default expectArrayOfLength
