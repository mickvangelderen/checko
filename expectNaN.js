/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

import inspect from './inspect'

/**
 * Throws an exception when value is not NaN.
 * @param value The value.
 * @return Returns the passed value.
 */
export default function expectNaN(value) {
  if (value !== value) return value
  throw new Error(`Expected ${inspect(value)} to be NaN.`)
}
