/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

import inspect from './inspect'

/**
 * Throws an exception when value is not a number.
 * @param value The value.
 * @return Returns the passed value.
 */
export default function expectNumber(value) {
  if (typeof value === 'number' && value === value) return value
  throw new Error(`Expected ${inspect(value)} to be a number.`)
}
