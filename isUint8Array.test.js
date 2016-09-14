/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isUint8Array from './isUint8Array'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isUint8Array', () => {
  it('should export a function', () => {
    expectFunction(isUint8Array)
  })

  function p(value) { expectTrue(isUint8Array(value)) }
  function n(value) { expectFalse(isUint8Array(value)) }

  if (Uint8Array) {
    it('should work', () => {
      p(new Uint8Array(0))
      n({})
    })
  } else {
    it.skip('Uint8Array not available', () => {})
  }
})
