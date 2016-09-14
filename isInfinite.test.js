/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isInfinite from './isInfinite'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isInfinite', () => {
  it('should export a function', () => {
    expectFunction(isInfinite)
  })

  function p(value) { expectTrue(isInfinite(value)) }
  function n(value) { expectFalse(isInfinite(value)) }

  it('should work', () => {
    p(-Infinity)
    n(-4.2)
    n(-1)
    n(-0)
    n(0)
    n(1)
    n(4.2)
    p(Infinity)
    n(NaN)
    n('1')
  })
})
