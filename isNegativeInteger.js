/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/**
 * Returns true if value is a negative integer, false otherwise.
 * @param value The value.
 * @return  Returns the result of the comparison.
 */
export default function isNegativeInteger(value) {
  return value === Math.floor(value) && value < 0 && value !== -Infinity
}
