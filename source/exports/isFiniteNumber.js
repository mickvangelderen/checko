export function _isFiniteNumberPolyfill(value) {
	// isFinite(NaN) === false, so we only need to use typeof.
	return typeof value === 'number' && isFinite(value)
}

export default Number.isFinite
	? Number.isFinite
	: _isFiniteNumberPolyfill
