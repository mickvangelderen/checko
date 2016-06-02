const isArray = require('./isArray')

function isArrayOfLength(length, value) {
	return isArray(value) && value.length === length
}

module.exports = isArrayOfLength
