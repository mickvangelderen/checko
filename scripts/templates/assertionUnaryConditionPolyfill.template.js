/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

import inspect from './inspect'
import ___PREDICATE_NAME___ from './___PREDICATE_NAME___'

/**
 * Throws an exception when value is not ___TO_BE___.
 * @param value The value.
 * @return Returns the passed value.
 */
export default function ___ASSERTION_NAME___(value) {
  if (___PREDICATE_NAME___(value)) return value
  throw new Error(`Expected ${inspect(value)} to be ___TO_BE___.`)
}
