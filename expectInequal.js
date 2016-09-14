/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

import inspect from './inspect'

/**
 * Throws an exception when value is not strictly inequal to expected.
 * @param value The value.
 * @param  expected The value with which value is compared.
 * @return Returns the passed value.
 */
export default function expectInequal(value, expected) {
  if (value !== expected) return value
  throw new Error(`Expected ${inspect(value)} to be strictly inequal to ${inspect(expected)}.`)
}
