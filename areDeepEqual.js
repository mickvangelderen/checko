const objectToString = Object.prototype.toString

/**
 * Returns true if value is deep equal to expected, false otherwise. Ignores
 * properties on the prototype of objects and -0 is the same as +0. Allows for
 * custom comparisons of instances if the class provides a static equal or
 * compare method.
 * @param value The value.
 * @param expected The expected value.
 * @return 
 */
export default function areDeepEqual(expected, value) {
	return _areDeepEqual(expected, value, [ [], [] ])
}

function _areDeepEqual(expected, value, checked) {
	// Pass if strict equal.
	if (value === expected) return true

	// Fail if types differ.
	const type = objectToString.call(expected)
	if (objectToString.call(value) !== type) return false

	// Specialized comparison functions.
	switch(type) {
		case '[object Array]':
			return _areDeepEqualArrays(expected, value, checked)
		case '[object Date]':
			return value.getTime() === expected.getTime()
		case '[object Function]':
		case '[object GeneratorFunction]':
		case '[object Promise]':
			return false
		case '[object Number]':
			return value !== value && expected !== expected // isNaN(value) && isNaN(expected)
		case '[object RegExp]':
			return value.source === expected.source
				&& value.global === expected.global
				&& value.multiline === expected.multiline
				&& value.lastIndex === expected.lastIndex
				&& value.ignoreCase === expected.ignoreCase
	}

	// At this point non-objects are inequal.
	if (typeof expected !== 'object' || expected === null) return false // !isObject(expected)

	return _areDeepEqualObjects(expected, value, checked)
}

function _areDeepEqualArrays(expected, value, checked) {
	// If we are already checked the current (expected, value) pair, assume that it is equal.
	if (_isChecked(expected, value, checked)) return true

	// Mark this (expected, value) pair as being checked.
	_check(expected, value, checked)

	if (value.length !== expected.length) return false

	for (let i = 0, l = expected.length; i < l; i++) {
		if (!_areDeepEqual(value[i], expected[i], checked)) return false
	}

	return true
}

function _areDeepEqualObjects(expected, value, checked) {
	// Ensure matching constructors.
	const species = expected.constructor
	if (value.constructor !== species) return false

	// If we are already checked the current (expected, value) pair, assume that it is equal.
	if (_isChecked(expected, value, checked)) return true

	// Mark this (expected, value) pair as being checked.
	_check(expected, value, checked)

	if (species) {
		// Allow custom equality function.
		if (typeof species.equal === 'function') return species.equal(expected, value)

		// Allow custom comparison function.
		if (typeof species.compare === 'function') return species.compare(expected, value) === 0
	}

	// Something that is most likely iterable.
	const expectedKeys = Object.keys(expected)
	const valueKeys = Object.keys(value)

	// Unequal number of keys.
	if (expectedKeys.length !== valueKeys.length) return false

	// Check both sets of (key, value) pairs are equal.
	expectedKeys.sort()
	valueKeys.sort()
	for (let i = 0; i < expectedKeys.length; i++) {
		const key = expectedKeys[i]
		if (valueKeys[i] !== key || !_areDeepEqual(expected[key], value[key], checked)) return false
	}

	return true
}

function _isChecked(expected, value, checked) {
	for (let i = 0, l = checked.length; i < l; i++) {
		const pair = checked[i]
		if (pair[0] === expected && pair[1] === value) return true
	}
	return false
}

function _check(expected, value, checked) {
	checked.push([ expected, value ])
}
