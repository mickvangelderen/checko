/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectUint32Array from './expectUint32Array'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectUint32Array', () => {
  it('should export a function', () => {
    expectFunction(expectUint32Array)
  })

  function p(value) { expectSame(expectUint32Array(value), value) }
  function n(value) { expectToThrow(expectUint32Array, null, [ value ]) }

  if (Uint32Array) {
    it('should work', () => {
      p(new Uint32Array(0))
      n({})
    })
  } else {
    it.skip('Uint32Array not available', () => {})
  }
})
