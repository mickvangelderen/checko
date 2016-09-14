/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

import inspect from './inspect'

/**
 * Throws an exception when value is not a positive number.
 * @param value The value.
 * @return Returns the passed value.
 */
export default function expectPositiveNumber(value) {
  if (typeof value === 'number' && value > 0) return value
  throw new Error(`Expected ${inspect(value)} to be a positive number.`)
}
