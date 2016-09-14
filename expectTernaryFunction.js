/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

import inspect from './inspect'

/**
 * Throws an exception when value is not a ternary function.
 * @param value The value.
 * @return Returns the passed value.
 */
export default function expectTernaryFunction(value) {
  if (typeof value === 'function' && value.length === 3) return value
  throw new Error(`Expected ${inspect(value)} to be a ternary function.`)
}
