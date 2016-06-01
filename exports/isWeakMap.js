const objectToString = Object.prototype.toString

function isWeakMap(value) {
	return objectToString.call(value) === '[object WeakMap]'
}

module.exports = isWeakMap
