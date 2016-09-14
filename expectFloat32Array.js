/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

import inspect from './inspect'

const objectToString = Object.prototype.toString

/**
 * Throws an exception when value is not a Float32Array.
 * @param value The value.
 * @return Returns the passed value.
 */
export default function expectFloat32Array(value) {
  if (objectToString.call(value) === '[object Float32Array]') return value
  throw new Error(`Expected ${inspect(value)} to be a Float32Array.`)
}
