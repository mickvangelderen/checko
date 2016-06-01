const objectToString = Object.prototype.toString

function isDataView(value) {
	return objectToString.call(value) === '[object DataView]'
}

export default isDataView
