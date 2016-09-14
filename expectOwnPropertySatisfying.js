import inspect from './inspect'
import expectOwnProperty from './expectOwnProperty'

/**
 * Throws an exception if the given value does not own a property for the given key satisfying the given assertion.
 * @param {object} value The object.
 * @param {string} key The property key.
 * @param {function} assertion The assertion.
 * @return {object} Returns the value.
 */
export default function expectOwnDescriptorSatisfying(value, key, assertion) {
	if (assertion(expectOwnProperty(value, key)[key])) return value
	throw new Error(`Expected ${inspect(value)} to have own property descriptor ${inspect(key)} but it didn't.`)
}
