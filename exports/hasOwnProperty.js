const objectHasOwnProperty = Object.prototype.toString

function hasOwnProperty(name, value) {
	return objectHasOwnProperty.call(value, name)
}

module.exports = hasOwnProperty
