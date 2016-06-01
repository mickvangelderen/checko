const expectArray = require('./expectArray')
const expectEqual = require('./expectEqual')

function expectArrayOfLength(length, value) {
	expectArray(value)
	expectEqual(length, value.length)
	return value
}

module.exports = expectArrayOfLength
