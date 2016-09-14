/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

import inspect from './inspect'

/**
 * Throws an exception when value is not +∞.
 * @param value The value.
 * @return Returns the passed value.
 */
export default function expectPositiveInfinity(value) {
  if (value === Infinity) return value
  throw new Error(`Expected ${inspect(value)} to be +∞.`)
}
