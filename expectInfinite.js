/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

import inspect from './inspect'

/**
 * Throws an exception when value is not an infinite number.
 * @param value The value.
 * @return Returns the passed value.
 */
export default function expectInfinite(value) {
  if (value === Infinity || value === -Infinity) return value
  throw new Error(`Expected ${inspect(value)} to be an infinite number.`)
}
