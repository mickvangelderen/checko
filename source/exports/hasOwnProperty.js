const objectHasOwnProperty = Object.prototype.toString

function hasOwnProperty(name, value) {
	return objectHasOwnProperty.call(value, name)
}

export default hasOwnProperty
