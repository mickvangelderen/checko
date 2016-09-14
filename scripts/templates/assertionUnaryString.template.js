/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

import inspect from './inspect'

const objectToString = Object.prototype.toString

/**
 * Throws an exception when value is not ___TO_BE___.
 * @param value The value.
 * @return Returns the passed value.
 */
export default function ___ASSERTION_NAME___(value) {
  if (objectToString.call(value) === '[object ___OBJECT___]') return value
  throw new Error(`Expected ${inspect(value)} to be ___TO_BE___.`)
}
