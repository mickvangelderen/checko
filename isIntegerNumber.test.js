/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isIntegerNumber from './isIntegerNumber'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isIntegerNumber', () => {
  it('should export a function', () => {
    expectFunction(isIntegerNumber)
  })

  function p(value) { expectTrue(isIntegerNumber(value)) }
  function n(value) { expectFalse(isIntegerNumber(value)) }

  it('should work', () => {
    n(-Infinity)
    n(-4.2)
    p(-1)
    p(-0)
    p(0)
    p(1)
    n(4.2)
    n(Infinity)
    n(NaN)
    n('1')
  })
})
