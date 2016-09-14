/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isPositiveZero from './isPositiveZero'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isPositiveZero', () => {
  it('should export a function', () => {
    expectFunction(isPositiveZero)
  })

  function p(value) { expectTrue(isPositiveZero(value)) }
  function n(value) { expectFalse(isPositiveZero(value)) }

  it('should work', () => {
    p(0)
    n(-0)
    n('0')
  })
})
