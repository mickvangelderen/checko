/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

const objectToString = Object.prototype.toString

/**
 * Returns true if value is a Float64Array, false otherwise.
 * @param value The value.
 * @return  Returns the result of the comparison.
 */
export default function isFloat64Array(value) {
  return objectToString.call(value) === '[object Float64Array]'
}
