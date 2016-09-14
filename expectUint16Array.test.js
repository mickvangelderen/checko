/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectUint16Array from './expectUint16Array'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectUint16Array', () => {
  it('should export a function', () => {
    expectFunction(expectUint16Array)
  })

  function p(value) { expectSame(expectUint16Array(value), value) }
  function n(value) { expectToThrow(expectUint16Array, null, [ value ]) }

  if (Uint16Array) {
    it('should work', () => {
      p(new Uint16Array(0))
      n({})
    })
  } else {
    it.skip('Uint16Array not available', () => {})
  }
})
