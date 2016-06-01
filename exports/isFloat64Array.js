const objectToString = Object.prototype.toString

function isFloat64Array(value) {
	return objectToString.call(value) === '[object Float64Array]'
}

module.exports = isFloat64Array