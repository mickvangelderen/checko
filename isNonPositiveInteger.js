/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/**
 * Returns true if value is a non-positive integer, false otherwise.
 * @param value The value.
 * @return  Returns the result of the comparison.
 */
export default function isNonPositiveInteger(value) {
  return value === Math.floor(value) && value <= 0 && value !== -Infinity
}
