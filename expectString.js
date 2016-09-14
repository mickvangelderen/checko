/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

import inspect from './inspect'

/**
 * Throws an exception when value is not a string.
 * @param value The value.
 * @return Returns the passed value.
 */
export default function expectString(value) {
  if (typeof value === 'string') return value
  throw new Error(`Expected ${inspect(value)} to be a string.`)
}
