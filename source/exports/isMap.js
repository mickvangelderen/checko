const objectToString = Object.prototype.toString

function isMap(value) {
	return objectToString.call(value) === '[object Map]'
}

export default isMap
