/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isFloat64Array from './isFloat64Array'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isFloat64Array', () => {
  it('should export a function', () => {
    expectFunction(isFloat64Array)
  })

  function p(value) { expectTrue(isFloat64Array(value)) }
  function n(value) { expectFalse(isFloat64Array(value)) }

  if (Float64Array) {
    it('should work', () => {
      p(new Float64Array(0))
      n({})
    })
  } else {
    it.skip('Float64Array not available', () => {})
  }
})
