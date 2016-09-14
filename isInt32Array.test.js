/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isInt32Array from './isInt32Array'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isInt32Array', () => {
  it('should export a function', () => {
    expectFunction(isInt32Array)
  })

  function p(value) { expectTrue(isInt32Array(value)) }
  function n(value) { expectFalse(isInt32Array(value)) }

  if (Int32Array) {
    it('should work', () => {
      p(new Int32Array(0))
      n({})
    })
  } else {
    it.skip('Int32Array not available', () => {})
  }
})
