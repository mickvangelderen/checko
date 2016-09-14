/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

import inspect from './inspect'

/**
 * Throws an exception when value is not an integer.
 * @param value The value.
 * @return Returns the passed value.
 */
export default function expectInteger(value) {
  if (value == Math.floor(value) && isFinite(value)) return value
  throw new Error(`Expected ${inspect(value)} to be an integer.`)
}
