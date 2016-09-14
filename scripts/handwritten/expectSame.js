import inspect from './inspect'
import areSame from './areSame'

/**
 * Throws an exception when value is not the same value as expected. Returns NaN
 * if both values are NaN, throws if one value is +0 and the other -0.
 * @param value The value.
 * @param expected The value with which value is compared.
 * @return Returns the passed value.
 */
export default function expectSame(value, expected) {
  if (areSame(value, expected)) return value
  throw new Error(`Expected ${inspect(value)} to be the same value as to ${inspect(expected)}.`)
}
