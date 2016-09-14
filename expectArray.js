/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

import inspect from './inspect'
import isArray from './isArray'

/**
 * Throws an exception when value is not a Array.
 * @param value The value.
 * @return Returns the passed value.
 */
export default function expectArray(value) {
  if (isArray(value)) return value
  throw new Error(`Expected ${inspect(value)} to be a Array.`)
}
