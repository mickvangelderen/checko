/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isUint16Array from './isUint16Array'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isUint16Array', () => {
  it('should export a function', () => {
    expectFunction(isUint16Array)
  })

  function p(value) { expectTrue(isUint16Array(value)) }
  function n(value) { expectFalse(isUint16Array(value)) }

  if (Uint16Array) {
    it('should work', () => {
      p(new Uint16Array(0))
      n({})
    })
  } else {
    it.skip('Uint16Array not available', () => {})
  }
})
