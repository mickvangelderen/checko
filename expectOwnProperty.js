import inspect from './inspect'

const objectHasOwnProperty = Object.prototype.hasOwnProperty

/**
 * Throws an exception if the provided value does not have a property called
 * key.
 * @param  {string}  value The object.
 * @param  {object}  key  The property key.
 * @return        Whether or not value has own property key.
 */
export default function expectOwnProperty(value, key) {
	if (objectHasOwnProperty.call(value, key)) return value
	throw new Error(`Expected ${inspect(value)} to have own property ${inspect(key)}.`)
}
