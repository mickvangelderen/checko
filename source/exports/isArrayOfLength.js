import isArray from './isArray'

function isArrayOfLength(length, value) {
	return isArray(value) && value.length === length
}

export default isArrayOfLength
