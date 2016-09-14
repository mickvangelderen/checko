/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isEvenInteger from './isEvenInteger'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isEvenInteger', () => {
  it('should export a function', () => {
    expectFunction(isEvenInteger)
  })

  function p(value) { expectTrue(isEvenInteger(value)) }
  function n(value) { expectFalse(isEvenInteger(value)) }

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
    n('0')
  })
})
