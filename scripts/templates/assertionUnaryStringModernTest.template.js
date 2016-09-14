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

  function p(value) { expectSame(___ASSERTION_NAME___(value), value) }
  function n(value) { expectToThrow(___ASSERTION_NAME___, null, [ value ]) }

  if (___OBJECT___) {
    it('should work', () => {
___TESTS___
    })
  } else {
    it.skip('___OBJECT___ not available', () => {})
  }
})
