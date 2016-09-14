import isArray from './isArray'

/**
 * Returns true if the given value is a non-empty array, false otherwise.
 * @param  {array}  value The array.
 * @return 
 */
export default function isNonEmptyArray(value) {
	return isArray(value) && value.length !== 0
}
