/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import ___PREDICATE_NAME___ from './___PREDICATE_NAME___'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('___PREDICATE_NAME___', () => {
  it('should export a function', () => {
    expectFunction(___PREDICATE_NAME___)
  })

  function p(value, expected) { expectTrue(___PREDICATE_NAME___(value, expected)) }
  function n(value, expected) { expectFalse(___PREDICATE_NAME___(value, expected)) }

  it('should work', () => {
___TESTS___
  })
})
