const objectToString = Object.prototype.toString

function isWeakSet(value) {
	return objectToString.call(value) === '[object WeakSet]'
}

export default isWeakSet
