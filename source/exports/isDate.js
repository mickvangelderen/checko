const objectToString = Object.prototype.toString

function isDate(value) {
	return objectToString.call(value) === '[object Date]'
}

module.exports = isDate
