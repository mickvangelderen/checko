/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectInt8Array from './expectInt8Array'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectInt8Array', () => {
  it('should export a function', () => {
    expectFunction(expectInt8Array)
  })

  function p(value) { expectSame(expectInt8Array(value), value) }
  function n(value) { expectToThrow(expectInt8Array, null, [ value ]) }

  if (Int8Array) {
    it('should work', () => {
      p(new Int8Array(0))
      n({})
    })
  } else {
    it.skip('Int8Array not available', () => {})
  }
})
