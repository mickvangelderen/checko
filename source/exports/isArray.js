const objectToString = Object.prototype.toString

export function _isArrayPolyfill(value) {
	return objectToString.call(value) === '[object Array]'
}

export default Array.isArray
	? Array.isArray
	: _isArrayPolyfill
