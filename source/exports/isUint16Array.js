const objectToString = Object.prototype.toString

function isUint16Array(value) {
	return objectToString.call(value) === '[object Uint16Array]'
}

export default isUint16Array
