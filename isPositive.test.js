/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isPositive from './isPositive'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isPositive', () => {
  it('should export a function', () => {
    expectFunction(isPositive)
  })

  function p(value) { expectTrue(isPositive(value)) }
  function n(value) { expectFalse(isPositive(value)) }

  it('should work', () => {
    n(-Infinity)
    n(-4.2)
    n(-1)
    n(-0)
    n(0)
    p(1)
    p(4.2)
    p(Infinity)
    n(NaN)
    p('1')
  })
})
