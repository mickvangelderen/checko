/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isNegative from './isNegative'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isNegative', () => {
  it('should export a function', () => {
    expectFunction(isNegative)
  })

  function p(value) { expectTrue(isNegative(value)) }
  function n(value) { expectFalse(isNegative(value)) }

  it('should work', () => {
    p(-Infinity)
    p(-4.2)
    p(-1)
    n(-0)
    n(0)
    n(1)
    n(4.2)
    n(Infinity)
    n(NaN)
    p('-1')
  })
})
