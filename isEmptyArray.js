import isArray from './isArray'

/**
 * Returns true if the given value is an empty array, false otherwise.
 * @param  {array}  value The array.
 * @return 
 */
export default function isEmptyArray(value) {
	return isArray(value) && value.length === 0
}
