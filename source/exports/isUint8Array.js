const objectToString = Object.prototype.toString

function isUint8Array(value) {
	return objectToString.call(value) === '[object Uint8Array]'
}

module.exports = isUint8Array
