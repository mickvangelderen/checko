/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isNonNegative from './isNonNegative'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isNonNegative', () => {
  it('should export a function', () => {
    expectFunction(isNonNegative)
  })

  function p(value) { expectTrue(isNonNegative(value)) }
  function n(value) { expectFalse(isNonNegative(value)) }

  it('should work', () => {
    n(-Infinity)
    n(-4.2)
    n(-1)
    p(-0)
    p(0)
    p(1)
    p(4.2)
    p(Infinity)
    n(NaN)
    p('0')
  })
})
