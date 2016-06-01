const objectToString = Object.prototype.toString

function isArrayBuffer(value) {
	return objectToString.call(value) === '[object ArrayBuffer]'
}

module.exports = isArrayBuffer
