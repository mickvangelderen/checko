/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

import inspect from './inspect'

const objectToString = Object.prototype.toString

/**
 * Throws an exception when value is not a Map.
 * @param value The value.
 * @return Returns the passed value.
 */
export default function expectMap(value) {
  if (objectToString.call(value) === '[object Map]') return value
  throw new Error(`Expected ${inspect(value)} to be a Map.`)
}
