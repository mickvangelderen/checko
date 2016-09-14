/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isNonPositive from './isNonPositive'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isNonPositive', () => {
  it('should export a function', () => {
    expectFunction(isNonPositive)
  })

  function p(value) { expectTrue(isNonPositive(value)) }
  function n(value) { expectFalse(isNonPositive(value)) }

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
    p('-0')
  })
})
