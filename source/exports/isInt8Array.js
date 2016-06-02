const objectToString = Object.prototype.toString

function isInt8Array(value) {
	return objectToString.call(value) === '[object Int8Array]'
}

export default isInt8Array
