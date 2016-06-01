const objectToString = Object.prototype.toString

function isUint32Array(value) {
	return objectToString.call(value) === '[object Uint32Array]'
}

export default isUint32Array
