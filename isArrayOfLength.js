import isArray from './isArray'

/**
 * Returns true if the given value is an array of the given length, false otherwise.
 * @param  {number}  value The array.
 * @param  {function}  length The expected length.
 * @return 
 */
export default function isArrayOfLength(value, length) {
	return isArray(value) && value.length === length
}
