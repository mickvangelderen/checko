/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectUint8Array from './expectUint8Array'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectUint8Array', () => {
  it('should export a function', () => {
    expectFunction(expectUint8Array)
  })

  function p(value) { expectSame(expectUint8Array(value), value) }
  function n(value) { expectToThrow(expectUint8Array, null, [ value ]) }

  if (Uint8Array) {
    it('should work', () => {
      p(new Uint8Array(0))
      n({})
    })
  } else {
    it.skip('Uint8Array not available', () => {})
  }
})
