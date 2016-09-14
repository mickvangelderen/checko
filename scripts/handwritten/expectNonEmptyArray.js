import expectArray from './expectArray'
import inspect from './inspect'

/**
 * Throws an exception if the given value is not an array or if it is empty.
 * @param {number} value The array.
 * @return Returns the passed value.
 */
export default function expectNonEmptyArray(value) {
	if (expectArray(value).length !== 0) return value
	throw new Error(`Expected ${inspect(value)} to be non-empty.`)
}
