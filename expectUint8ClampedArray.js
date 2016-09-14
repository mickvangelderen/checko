/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

import inspect from './inspect'

const objectToString = Object.prototype.toString

/**
 * Throws an exception when value is not a Uint8ClampedArray.
 * @param value The value.
 * @return Returns the passed value.
 */
export default function expectUint8ClampedArray(value) {
  if (objectToString.call(value) === '[object Uint8ClampedArray]') return value
  throw new Error(`Expected ${inspect(value)} to be a Uint8ClampedArray.`)
}
