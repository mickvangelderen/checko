/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectWeakMap from './expectWeakMap'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectWeakMap', () => {
  it('should export a function', () => {
    expectFunction(expectWeakMap)
  })

  function p(value) { expectSame(expectWeakMap(value), value) }
  function n(value) { expectToThrow(expectWeakMap, null, [ value ]) }

  if (WeakMap) {
    it('should work', () => {
      p(new WeakMap())
      n({})
    })
  } else {
    it.skip('WeakMap not available', () => {})
  }
})
