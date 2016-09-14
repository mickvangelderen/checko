/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/**
 * Returns true if value is even, false otherwise.
 * @param value The value.
 * @return  Returns the result of the comparison.
 */
export default function isEven(value) {
  return (value & 1) === 0 && value == Math.floor(value) && isFinite(value)
}
