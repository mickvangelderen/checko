/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isFiniteNumber from './isFiniteNumber'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isFiniteNumber', () => {
  it('should export a function', () => {
    expectFunction(isFiniteNumber)
  })

  function p(value) { expectTrue(isFiniteNumber(value)) }
  function n(value) { expectFalse(isFiniteNumber(value)) }

  it('should work', () => {
    n(-Infinity)
    p(-4.2)
    p(-1)
    p(-0)
    p(0)
    p(1)
    p(4.2)
    n(Infinity)
    n(NaN)
    n('1')
  })
})
