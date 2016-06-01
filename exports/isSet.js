const objectToString = Object.prototype.toString

function isSet(value) {
	return objectToString.call(value) === '[object Set]'
}

module.exports = isSet
