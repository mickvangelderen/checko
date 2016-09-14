/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

import inspect from './inspect'

/**
 * Throws an exception when value is not an odd integer.
 * @param value The value.
 * @return Returns the passed value.
 */
export default function expectOddInteger(value) {
  if ((value & 1) === 1 && value === Math.floor(value)) return value
  throw new Error(`Expected ${inspect(value)} to be an odd integer.`)
}
