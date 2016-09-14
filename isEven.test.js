/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isEven from './isEven'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isEven', () => {
  it('should export a function', () => {
    expectFunction(isEven)
  })

  function p(value) { expectTrue(isEven(value)) }
  function n(value) { expectFalse(isEven(value)) }

  it('should work', () => {
    n(-Infinity)
    n(-4.2)
    n(-1)
    p(-0)
    p(0)
    n(1)
    n(4.2)
    n(Infinity)
    n(NaN)
    p('0')
  })
})
