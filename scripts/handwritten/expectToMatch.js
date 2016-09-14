import inspect from './inspect'

 /**
  * Throws an exception if the provided string does not match the provided
  * RegExp.
  * @param  {string} value    The value.
  * @param  {regexp} expected The regular expression.
  * @return {string} Returns the passed value.
  */
export default function expectToMatch(value, expected) {
  if (expected.test(value)) return value
  throw new Error(`Expected ${inspect(value)} to match ${inspect(expected)} but it didn't.`)
}
