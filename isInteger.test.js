/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isInteger from './isInteger'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isInteger', () => {
  it('should export a function', () => {
    expectFunction(isInteger)
  })

  function p(value) { expectTrue(isInteger(value)) }
  function n(value) { expectFalse(isInteger(value)) }

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
    p('1')
  })
})
