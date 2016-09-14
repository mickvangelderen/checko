/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

import inspect from './inspect'

/**
 * Throws an exception when value is not null.
 * @param value The value.
 * @return Returns the passed value.
 */
export default function expectNull(value) {
  if (value === null) return value
  throw new Error(`Expected ${inspect(value)} to be null.`)
}
