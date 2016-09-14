const objectHasOwnProperty = Object.prototype.hasOwnProperty

/**
 * Returns true if the provided value has a property called key.
 * @param  {string}  value The property name.
 * @param  {object}  key  The object.
 * @return        Whether or not value has own property key.
 */
export default function hasOwnProperty(value, key) {
	return objectHasOwnProperty.call(value, key)
}
