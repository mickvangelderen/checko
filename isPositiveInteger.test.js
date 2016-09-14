/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isPositiveInteger from './isPositiveInteger'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isPositiveInteger', () => {
  it('should export a function', () => {
    expectFunction(isPositiveInteger)
  })

  function p(value) { expectTrue(isPositiveInteger(value)) }
  function n(value) { expectFalse(isPositiveInteger(value)) }

  it('should work', () => {
    n(-Infinity)
    n(-4.2)
    n(-1)
    n(-0)
    n(0)
    p(1)
    n(4.2)
    n(Infinity)
    n(NaN)
    n('1')
  })
})
