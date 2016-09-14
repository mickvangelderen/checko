/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

const objectToString = Object.prototype.toString

/**
 * Returns true if value is a Uint16Array, false otherwise.
 * @param value The value.
 * @return  Returns the result of the comparison.
 */
export default function isUint16Array(value) {
  return objectToString.call(value) === '[object Uint16Array]'
}
