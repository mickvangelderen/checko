/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/**
 * Returns true if value is a nullary function, false otherwise.
 * @param value The value.
 * @return  Returns the result of the comparison.
 */
export default function isNullaryFunction(value) {
  return typeof value === 'function' && value.length === 0
}
