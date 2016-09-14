/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isOddInteger from './isOddInteger'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isOddInteger', () => {
  it('should export a function', () => {
    expectFunction(isOddInteger)
  })

  function p(value) { expectTrue(isOddInteger(value)) }
  function n(value) { expectFalse(isOddInteger(value)) }

  it('should work', () => {
    n(-Infinity)
    n(-4.2)
    p(-1)
    n(-0)
    n(0)
    p(1)
    n(4.2)
    n(Infinity)
    n(NaN)
    n('1')
  })
})
