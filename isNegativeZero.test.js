/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isNegativeZero from './isNegativeZero'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isNegativeZero', () => {
  it('should export a function', () => {
    expectFunction(isNegativeZero)
  })

  function p(value) { expectTrue(isNegativeZero(value)) }
  function n(value) { expectFalse(isNegativeZero(value)) }

  it('should work', () => {
    p(-0)
    n(0)
    n('-0')
  })
})
