/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/**
 * Returns true if value is a non-positive number, false otherwise.
 * @param value The value.
 * @return  Returns the result of the comparison.
 */
export default function isNonPositiveNumber(value) {
  return typeof value === 'number' && value <= 0
}
