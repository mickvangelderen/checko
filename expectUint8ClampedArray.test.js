/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectUint8ClampedArray from './expectUint8ClampedArray'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectUint8ClampedArray', () => {
  it('should export a function', () => {
    expectFunction(expectUint8ClampedArray)
  })

  function p(value) { expectSame(expectUint8ClampedArray(value), value) }
  function n(value) { expectToThrow(expectUint8ClampedArray, null, [ value ]) }

  if (Uint8ClampedArray) {
    it('should work', () => {
      p(new Uint8ClampedArray(0))
      n({})
    })
  } else {
    it.skip('Uint8ClampedArray not available', () => {})
  }
})
