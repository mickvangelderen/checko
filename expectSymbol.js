/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

import inspect from './inspect'

/**
 * Throws an exception when value is not a symbol.
 * @param value The value.
 * @return Returns the passed value.
 */
export default function expectSymbol(value) {
  if (typeof value === 'symbol') return value
  throw new Error(`Expected ${inspect(value)} to be a symbol.`)
}
