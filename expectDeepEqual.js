import inspect from './inspect'
import areDeepEqual from './areDeepEqual'

/**
 * Throws an exception when value is not deep equal to expected. Ignores properties on the prototype of objects and -0 is the same as +0. Allows for custom comparisons of instances if the class provides a static equal or compare method.
 * @param value The value.
 * @param arity The expected value.
 * @return Returns the passed value.
 */
export default function expectDeepEqual(value, expected) {
  if (areDeepEqual(value, expected)) return value
  throw new Error(`Expected ${inspect(value)} to be deep equal to ${inspect(expected)}.`)
}
