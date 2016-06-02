const objectToString = Object.prototype.toString

function isInt32Array(value) {
	return objectToString.call(value) === '[object Int32Array]'
}

module.exports = isInt32Array
