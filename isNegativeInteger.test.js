/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isNegativeInteger from './isNegativeInteger'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isNegativeInteger', () => {
  it('should export a function', () => {
    expectFunction(isNegativeInteger)
  })

  function p(value) { expectTrue(isNegativeInteger(value)) }
  function n(value) { expectFalse(isNegativeInteger(value)) }

  it('should work', () => {
    n(-Infinity)
    n(-4.2)
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
