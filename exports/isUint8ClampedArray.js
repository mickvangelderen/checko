const objectToString = Object.prototype.toString

function isUint8ClampedArray(value) {
	return objectToString.call(value) === '[object Uint8ClampedArray]'
}

module.exports = isUint8ClampedArray
