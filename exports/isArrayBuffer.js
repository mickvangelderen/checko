const objectToString = Object.prototype.toString

function isArrayBuffer(value) {
	return objectToString.call(value) === '[object ArrayBuffer]'
}

export default isArrayBuffer
