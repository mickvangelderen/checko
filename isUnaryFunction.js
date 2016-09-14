/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/**
 * Returns true if value is a unary function, false otherwise.
 * @param value The value.
 * @return  Returns the result of the comparison.
 */
export default function isUnaryFunction(value) {
  return typeof value === 'function' && value.length === 1
}
