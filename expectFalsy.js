/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

import inspect from './inspect'

/**
 * Throws an exception when value is not falsy.
 * @param value The value.
 * @return Returns the passed value.
 */
export default function expectFalsy(value) {
  if (!value) return value
  throw new Error(`Expected ${inspect(value)} to be falsy.`)
}
