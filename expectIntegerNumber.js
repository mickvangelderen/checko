/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

import inspect from './inspect'
import isIntegerNumber from './isIntegerNumber'

/**
 * Throws an exception when value is not an integer number.
 * @param value The value.
 * @return Returns the passed value.
 */
export default function expectIntegerNumber(value) {
  if (isIntegerNumber(value)) return value
  throw new Error(`Expected ${inspect(value)} to be an integer number.`)
}
