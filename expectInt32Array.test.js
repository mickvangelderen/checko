/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectInt32Array from './expectInt32Array'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectInt32Array', () => {
  it('should export a function', () => {
    expectFunction(expectInt32Array)
  })

  function p(value) { expectSame(expectInt32Array(value), value) }
  function n(value) { expectToThrow(expectInt32Array, null, [ value ]) }

  if (Int32Array) {
    it('should work', () => {
      p(new Int32Array(0))
      n({})
    })
  } else {
    it.skip('Int32Array not available', () => {})
  }
})
