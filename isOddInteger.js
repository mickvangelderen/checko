/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/**
 * Returns true if value is an odd integer, false otherwise.
 * @param value The value.
 * @return  Returns the result of the comparison.
 */
export default function isOddInteger(value) {
  return (value & 1) === 1 && value === Math.floor(value)
}
