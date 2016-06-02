const isNumber = require('./isNumber')

function isInfiniteNumber(value) {
	return isNumber(value) && isFinite(value)
}

module.exports = isInfiniteNumber
