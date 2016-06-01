const isFiniteNumber = Number.isFinite
	? Number.isFinite
	: function isFiniteNumber(value) {
		// isFinite(NaN) === false, so we only need to use typeof.
		return typeof value === 'number' && isFinite(value)
	}

export default isFiniteNumber
