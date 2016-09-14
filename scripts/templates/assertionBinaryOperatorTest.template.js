/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import ___ASSERTION_NAME___ from './___ASSERTION_NAME___'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('___ASSERTION_NAME___', () => {
  it('should export a function', () => {
    expectFunction(___ASSERTION_NAME___)
  })

  function p(value, expected) { expectSame(___ASSERTION_NAME___(value, expected), value) }
  function n(value, expected) { expectToThrow(___ASSERTION_NAME___, null, [ value, expected ]) }

  it('should work', () => {
___TESTS___
  })
})
