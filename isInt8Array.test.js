/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isInt8Array from './isInt8Array'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isInt8Array', () => {
  it('should export a function', () => {
    expectFunction(isInt8Array)
  })

  function p(value) { expectTrue(isInt8Array(value)) }
  function n(value) { expectFalse(isInt8Array(value)) }

  if (Int8Array) {
    it('should work', () => {
      p(new Int8Array(0))
      n({})
    })
  } else {
    it.skip('Int8Array not available', () => {})
  }
})
