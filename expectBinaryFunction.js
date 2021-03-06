/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

import inspect from './inspect'

/**
 * Throws an exception when value is not a binary function.
 * @param value The value.
 * @return Returns the passed value.
 */
export default function expectBinaryFunction(value) {
  if (typeof value === 'function' && value.length === 2) return value
  throw new Error(`Expected ${inspect(value)} to be a binary function.`)
}
