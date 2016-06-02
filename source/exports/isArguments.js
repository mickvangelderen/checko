const objectToString = Object.prototype.toString

function isArguments(value) {
	return objectToString.call(value) === '[object Arguments]'
}

export default isArguments
