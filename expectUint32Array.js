/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

import inspect from './inspect'

const objectToString = Object.prototype.toString

/**
 * Throws an exception when value is not a Uint32Array.
 * @param value The value.
 * @return Returns the passed value.
 */
export default function expectUint32Array(value) {
  if (objectToString.call(value) === '[object Uint32Array]') return value
  throw new Error(`Expected ${inspect(value)} to be a Uint32Array.`)
}
