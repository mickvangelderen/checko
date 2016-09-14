/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

import inspect from './inspect'

/**
 * Throws an exception when value is not non-negative.
 * @param value The value.
 * @return Returns the passed value.
 */
export default function expectNonNegative(value) {
  if (value >= 0) return value
  throw new Error(`Expected ${inspect(value)} to be non-negative.`)
}
