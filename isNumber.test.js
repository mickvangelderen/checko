/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isNumber from './isNumber'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isNumber', () => {
  it('should export a function', () => {
    expectFunction(isNumber)
  })

  function p(value) { expectTrue(isNumber(value)) }
  function n(value) { expectFalse(isNumber(value)) }

  it('should work', () => {
    p(-Infinity)
    p(-4.2)
    p(-1)
    p(-0)
    p(0)
    p(1)
    p(4.2)
    p(Infinity)
    n(NaN)
    n('1')
  })
})
