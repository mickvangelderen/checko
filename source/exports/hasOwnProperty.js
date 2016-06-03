const objectHasOwnProperty = Object.prototype.hasOwnProperty

function hasOwnProperty(name, value) {
	return objectHasOwnProperty.call(value, name)
}

export default hasOwnProperty
