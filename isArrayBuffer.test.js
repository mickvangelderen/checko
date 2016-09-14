/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isArrayBuffer from './isArrayBuffer'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isArrayBuffer', () => {
  it('should export a function', () => {
    expectFunction(isArrayBuffer)
  })

  function p(value) { expectTrue(isArrayBuffer(value)) }
  function n(value) { expectFalse(isArrayBuffer(value)) }

  if (ArrayBuffer) {
    it('should work', () => {
      p(new ArrayBuffer(0))
      n({})
    })
  } else {
    it.skip('ArrayBuffer not available', () => {})
  }
})
