const objectToString = Object.prototype.toString

function isDataView(value) {
	return objectToString.call(value) === '[object DataView]'
}

module.exports = isDataView
