/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isUint32Array from './isUint32Array'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isUint32Array', () => {
  it('should export a function', () => {
    expectFunction(isUint32Array)
  })

  function p(value) { expectTrue(isUint32Array(value)) }
  function n(value) { expectFalse(isUint32Array(value)) }

  if (Uint32Array) {
    it('should work', () => {
      p(new Uint32Array(0))
      n({})
    })
  } else {
    it.skip('Uint32Array not available', () => {})
  }
})
