/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isNonPositiveInteger from './isNonPositiveInteger'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isNonPositiveInteger', () => {
  it('should export a function', () => {
    expectFunction(isNonPositiveInteger)
  })

  function p(value) { expectTrue(isNonPositiveInteger(value)) }
  function n(value) { expectFalse(isNonPositiveInteger(value)) }

  it('should work', () => {
    n(-Infinity)
    n(-4.2)
    p(-1)
    p(-0)
    p(0)
    n(1)
    n(4.2)
    n(Infinity)
    n(NaN)
    n('-0')
  })
})
