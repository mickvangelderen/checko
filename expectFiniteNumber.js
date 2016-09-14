/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

import inspect from './inspect'
import isFiniteNumber from './isFiniteNumber'

/**
 * Throws an exception when value is not a finite number.
 * @param value The value.
 * @return Returns the passed value.
 */
export default function expectFiniteNumber(value) {
  if (isFiniteNumber(value)) return value
  throw new Error(`Expected ${inspect(value)} to be a finite number.`)
}
