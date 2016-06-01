const objectToString = Object.prototype.toString

function isSymbol(value) {
	return objectToString.call(value) === '[object Symbol]'
}

module.exports = isSymbol