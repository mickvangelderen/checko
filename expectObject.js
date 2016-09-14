/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

import inspect from './inspect'

/**
 * Throws an exception when value is not an object.
 * @param value The value.
 * @return Returns the passed value.
 */
export default function expectObject(value) {
  if (typeof value === 'object' && value !== null) return value
  throw new Error(`Expected ${inspect(value)} to be an object.`)
}
