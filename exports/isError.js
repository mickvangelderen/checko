const objectToString = Object.prototype.toString

function isError(value) {
	return objectToString.call(value) === '[object Error]'
}

export default isError
