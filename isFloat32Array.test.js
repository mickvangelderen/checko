/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isFloat32Array from './isFloat32Array'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isFloat32Array', () => {
  it('should export a function', () => {
    expectFunction(isFloat32Array)
  })

  function p(value) { expectTrue(isFloat32Array(value)) }
  function n(value) { expectFalse(isFloat32Array(value)) }

  if (Float32Array) {
    it('should work', () => {
      p(new Float32Array(0))
      n({})
    })
  } else {
    it.skip('Float32Array not available', () => {})
  }
})
