/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

import inspect from './inspect'

/**
 * Throws an exception when value is not a non-empty string.
 * @param value The value.
 * @return Returns the passed value.
 */
export default function expectNonEmptyString(value) {
  if (typeof value === 'string' && value.length > 0) return value
  throw new Error(`Expected ${inspect(value)} to be a non-empty string.`)
}
