const objectHasOwnProperty = Object.prototype.hasOwnProperty

/**
 * Returns true if the given value owns a property for the given key satisfying a given predicate, false otherwise.
 * @param  {object}  value The object.
 * @param  {string}  key  The property key.
 * @param  {function} predicate  The predicate.
 * @return
 */
export default function hasOwnPropertySatisfying(value, key, predicate) {
	return objectHasOwnProperty.call(value, key) && predicate(value[key])
}
