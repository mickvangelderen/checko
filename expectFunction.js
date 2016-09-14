/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

import inspect from './inspect'

/**
 * Throws an exception when value is not a function.
 * @param value The value.
 * @return Returns the passed value.
 */
export default function expectFunction(value) {
  if (typeof value === 'function') return value
  throw new Error(`Expected ${inspect(value)} to be a function.`)
}
