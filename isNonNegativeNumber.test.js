/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isNonNegativeNumber from './isNonNegativeNumber'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isNonNegativeNumber', () => {
  it('should export a function', () => {
    expectFunction(isNonNegativeNumber)
  })

  function p(value) { expectTrue(isNonNegativeNumber(value)) }
  function n(value) { expectFalse(isNonNegativeNumber(value)) }

  it('should work', () => {
    n(-Infinity)
    n(-4.2)
    n(-1)
    p(-0)
    p(0)
    p(1)
    p(4.2)
    p(Infinity)
    n(NaN)
    n('0')
  })
})
