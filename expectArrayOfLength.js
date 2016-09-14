import expectArray from './expectArray'
import inspect from './inspect'

/**
 * Throws an exception if the given value is not an array of the given length.
 * @param {array} value The array.
 * @param {number} length The expected length.
 * @return Returns the passed value.
 */
export default function expectArrayOfLength(value, length) {
	if (expectArray(value).length === length) return value
	throw new Error(`Expected ${inspect(value)} to have length ${inspect(length)}.`)
}
