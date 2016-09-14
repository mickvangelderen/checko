/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

import inspect from './inspect'

const objectToString = Object.prototype.toString

/**
 * Throws an exception when value is not a WeakMap.
 * @param value The value.
 * @return Returns the passed value.
 */
export default function expectWeakMap(value) {
  if (objectToString.call(value) === '[object WeakMap]') return value
  throw new Error(`Expected ${inspect(value)} to be a WeakMap.`)
}
