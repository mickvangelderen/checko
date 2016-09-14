/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

import inspect from './inspect'

/**
 * Throws an exception when value is not 1.
 * @param value The value.
 * @return Returns the passed value.
 */
export default function expectOne(value) {
  if (value === 1) return value
  throw new Error(`Expected ${inspect(value)} to be 1.`)
}
