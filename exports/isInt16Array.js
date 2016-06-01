const objectToString = Object.prototype.toString

function isInt16Array(value) {
	return objectToString.call(value) === '[object Int16Array]'
}

export default isInt16Array
