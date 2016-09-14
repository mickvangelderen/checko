/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isNegativeInfinity from './isNegativeInfinity'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isNegativeInfinity', () => {
  it('should export a function', () => {
    expectFunction(isNegativeInfinity)
  })

  function p(value) { expectTrue(isNegativeInfinity(value)) }
  function n(value) { expectFalse(isNegativeInfinity(value)) }

  it('should work', () => {
    p(-Infinity)
    n(Infinity)
    n(NaN)
  })
})
