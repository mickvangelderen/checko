/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isNaN from './isNaN'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isNaN', () => {
  it('should export a function', () => {
    expectFunction(isNaN)
  })

  function p(value) { expectTrue(isNaN(value)) }
  function n(value) { expectFalse(isNaN(value)) }

  it('should work', () => {
    n(-Infinity)
    n(-4.2)
    n(-1)
    n(-0)
    n(0)
    n(1)
    n(4.2)
    n(Infinity)
    p(NaN)
    n('NaN')
  })
})
