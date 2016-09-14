/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

import inspect from './inspect'

/**
 * Throws an exception when value is not ___TO_BE___ expected.
 * @param value The value.
 * @param  expected The value with which value is compared.
 * @return Returns the passed value.
 */
export default function ___ASSERTION_NAME___(value, expected) {
  if (value ___OPERATOR___ expected) return value
  throw new Error(`Expected ${inspect(value)} to be ___TO_BE___ ${inspect(expected)}.`)
}
