/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isOdd from './isOdd'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isOdd', () => {
  it('should export a function', () => {
    expectFunction(isOdd)
  })

  function p(value) { expectTrue(isOdd(value)) }
  function n(value) { expectFalse(isOdd(value)) }

  it('should work', () => {
    n(-Infinity)
    n(-4.2)
    p(-1)
    n(-0)
    n(0)
    p(1)
    n(4.2)
    n(Infinity)
    n(NaN)
    p('1')
  })
})
