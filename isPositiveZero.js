/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/**
 * Returns true if value is +0, false otherwise.
 * @param value The value.
 * @return  Returns the result of the comparison.
 */
export default function isPositiveZero(value) {
  return typeof value === 'number' && 1/value === Infinity
}
