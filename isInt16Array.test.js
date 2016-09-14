/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isInt16Array from './isInt16Array'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isInt16Array', () => {
  it('should export a function', () => {
    expectFunction(isInt16Array)
  })

  function p(value) { expectTrue(isInt16Array(value)) }
  function n(value) { expectFalse(isInt16Array(value)) }

  if (Int16Array) {
    it('should work', () => {
      p(new Int16Array(0))
      n({})
    })
  } else {
    it.skip('Int16Array not available', () => {})
  }
})
