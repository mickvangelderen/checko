/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

import inspect from './inspect'

/**
 * Throws an exception when value is not true or false.
 * @param value The value.
 * @return Returns the passed value.
 */
export default function expectBoolean(value) {
  if (typeof value === 'boolean') return value
  throw new Error(`Expected ${inspect(value)} to be true or false.`)
}
