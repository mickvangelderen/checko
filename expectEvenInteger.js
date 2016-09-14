/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

import inspect from './inspect'

/**
 * Throws an exception when value is not an even integer.
 * @param value The value.
 * @return Returns the passed value.
 */
export default function expectEvenInteger(value) {
  if ((value & 1) === 0 && value === Math.floor(value) && isFinite(value)) return value
  throw new Error(`Expected ${inspect(value)} to be an even integer.`)
}
