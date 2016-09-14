/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isUint8ClampedArray from './isUint8ClampedArray'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isUint8ClampedArray', () => {
  it('should export a function', () => {
    expectFunction(isUint8ClampedArray)
  })

  function p(value) { expectTrue(isUint8ClampedArray(value)) }
  function n(value) { expectFalse(isUint8ClampedArray(value)) }

  if (Uint8ClampedArray) {
    it('should work', () => {
      p(new Uint8ClampedArray(0))
      n({})
    })
  } else {
    it.skip('Uint8ClampedArray not available', () => {})
  }
})
