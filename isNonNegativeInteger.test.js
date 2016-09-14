/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isNonNegativeInteger from './isNonNegativeInteger'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isNonNegativeInteger', () => {
  it('should export a function', () => {
    expectFunction(isNonNegativeInteger)
  })

  function p(value) { expectTrue(isNonNegativeInteger(value)) }
  function n(value) { expectFalse(isNonNegativeInteger(value)) }

  it('should work', () => {
    n(-Infinity)
    n(-4.2)
    n(-1)
    p(-0)
    p(0)
    p(1)
    n(4.2)
    n(Infinity)
    n(NaN)
    n('0')
  })
})
