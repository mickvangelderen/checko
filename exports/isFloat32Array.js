const objectToString = Object.prototype.toString

function isFloat32Array(value) {
	return objectToString.call(value) === '[object Float32Array]'
}

export default isFloat32Array
