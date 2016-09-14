import inspect from './inspect'

/**
 * Throws an exception when value is not a function of a given arity.
 * @param value The function.
 * @param arity The expected arity.
 * @return Returns the passed function.
 */
export default function expectSame(value, arity) {
  if (typeof value === 'function' && value.length === arity) return value
  throw new Error(`Expected ${inspect(value)} to be a function of arity ${inspect(arity)}.`)
}
