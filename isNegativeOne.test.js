/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isNegativeOne from './isNegativeOne'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isNegativeOne', () => {
  it('should export a function', () => {
    expectFunction(isNegativeOne)
  })

  function p(value) { expectTrue(isNegativeOne(value)) }
  function n(value) { expectFalse(isNegativeOne(value)) }

  it('should work', () => {
    p(-1)
    n('-1')
  })
})
