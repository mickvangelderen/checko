/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectWeakSet from './expectWeakSet'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectWeakSet', () => {
  it('should export a function', () => {
    expectFunction(expectWeakSet)
  })

  function p(value) { expectSame(expectWeakSet(value), value) }
  function n(value) { expectToThrow(expectWeakSet, null, [ value ]) }

  if (WeakSet) {
    it('should work', () => {
      p(new WeakSet())
      n({})
    })
  } else {
    it.skip('WeakSet not available', () => {})
  }
})
