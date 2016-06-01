const objectToString = Object.prototype.toString

function isRegExp(value) {
	return objectToString.call(value) === '[object RegExp]'
}

module.exports = isRegExp