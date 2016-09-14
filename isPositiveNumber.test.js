/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isPositiveNumber from './isPositiveNumber'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isPositiveNumber', () => {
  it('should export a function', () => {
    expectFunction(isPositiveNumber)
  })

  function p(value) { expectTrue(isPositiveNumber(value)) }
  function n(value) { expectFalse(isPositiveNumber(value)) }

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
    n('1')
  })
})
