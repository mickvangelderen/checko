/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

import inspect from './inspect'

/**
 * Throws an exception when value is not less than expected.
 * @param value The value.
 * @param  expected The value with which value is compared.
 * @return Returns the passed value.
 */
export default function expectLessThan(value, expected) {
  if (value < expected) return value
  throw new Error(`Expected ${inspect(value)} to be less than ${inspect(expected)}.`)
}
