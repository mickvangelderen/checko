/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isWeakMap from './isWeakMap'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isWeakMap', () => {
  it('should export a function', () => {
    expectFunction(isWeakMap)
  })

  function p(value) { expectTrue(isWeakMap(value)) }
  function n(value) { expectFalse(isWeakMap(value)) }

  if (WeakMap) {
    it('should work', () => {
      p(new WeakMap())
      n({})
    })
  } else {
    it.skip('WeakMap not available', () => {})
  }
})
