/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isNegativeNumber from './isNegativeNumber'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isNegativeNumber', () => {
  it('should export a function', () => {
    expectFunction(isNegativeNumber)
  })

  function p(value) { expectTrue(isNegativeNumber(value)) }
  function n(value) { expectFalse(isNegativeNumber(value)) }

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
    n('-1')
  })
})
