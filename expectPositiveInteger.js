/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

import inspect from './inspect'

/**
 * Throws an exception when value is not a positive integer.
 * @param value The value.
 * @return Returns the passed value.
 */
export default function expectPositiveInteger(value) {
  if (value === Math.floor(value) && value > 0 && value !== Infinity) return value
  throw new Error(`Expected ${inspect(value)} to be a positive integer.`)
}
