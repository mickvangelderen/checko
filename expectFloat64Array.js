/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

import inspect from './inspect'

const objectToString = Object.prototype.toString

/**
 * Throws an exception when value is not a Float64Array.
 * @param value The value.
 * @return Returns the passed value.
 */
export default function expectFloat64Array(value) {
  if (objectToString.call(value) === '[object Float64Array]') return value
  throw new Error(`Expected ${inspect(value)} to be a Float64Array.`)
}
