const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor

/**
 * Returns true if the provided value has a property descriptor for the given key satisfying a given predicate.
 * @param  {object}  value The object.
 * @param  {string}  key  The property key.
 * @param  {function} predicate  The predicate.
 * @return 
 */
export default function hasOwnDescriptorSatisfying(value, key, predicate) {
	const descriptor = getOwnPropertyDescriptor(value, key)
	return Boolean(descriptor) && predicate(descriptor)
}
