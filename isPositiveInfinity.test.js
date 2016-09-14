/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isPositiveInfinity from './isPositiveInfinity'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isPositiveInfinity', () => {
  it('should export a function', () => {
    expectFunction(isPositiveInfinity)
  })

  function p(value) { expectTrue(isPositiveInfinity(value)) }
  function n(value) { expectFalse(isPositiveInfinity(value)) }

  it('should work', () => {
    p(Infinity)
    n(-Infinity)
    n(NaN)
  })
})
