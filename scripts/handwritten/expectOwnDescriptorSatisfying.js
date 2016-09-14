import inspect from './inspect'

const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor

/**
 * Throws an exception if the provided value does not have a property descriptor under the provided key satisfying the provided assertion.
 * @param {object} value The object.
 * @param {string} key The property key.
 * @param {function} assertion The assertion.
 * @return {object} Returns the value.
 */
export default function expectOwnDescriptorSatisfying(value, key, assertion) {
	const descriptor = getOwnPropertyDescriptor(value, key)
	if (descriptor) {
		assertion(descriptor)
		return value
	}
	throw new Error(`Expected ${inspect(value)} to have own property descriptor ${inspect(key)} but it didn't.`)
}
