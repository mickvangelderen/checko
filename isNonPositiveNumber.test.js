/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isNonPositiveNumber from './isNonPositiveNumber'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isNonPositiveNumber', () => {
  it('should export a function', () => {
    expectFunction(isNonPositiveNumber)
  })

  function p(value) { expectTrue(isNonPositiveNumber(value)) }
  function n(value) { expectFalse(isNonPositiveNumber(value)) }

  it('should work', () => {
    p(-Infinity)
    p(-4.2)
    p(-1)
    p(-0)
    p(0)
    n(1)
    n(4.2)
    n(Infinity)
    n(NaN)
    n('-0')
  })
})
