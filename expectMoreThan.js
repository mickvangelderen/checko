/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

import inspect from './inspect'

/**
 * Throws an exception when value is not more than expected.
 * @param value The value.
 * @param  expected The value with which value is compared.
 * @return Returns the passed value.
 */
export default function expectMoreThan(value, expected) {
  if (value > expected) return value
  throw new Error(`Expected ${inspect(value)} to be more than ${inspect(expected)}.`)
}
