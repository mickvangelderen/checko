/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isWeakSet from './isWeakSet'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isWeakSet', () => {
  it('should export a function', () => {
    expectFunction(isWeakSet)
  })

  function p(value) { expectTrue(isWeakSet(value)) }
  function n(value) { expectFalse(isWeakSet(value)) }

  if (WeakSet) {
    it('should work', () => {
      p(new WeakSet())
      n({})
    })
  } else {
    it.skip('WeakSet not available', () => {})
  }
})
