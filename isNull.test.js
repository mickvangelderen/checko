/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isNull from './isNull'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isNull', () => {
  it('should export a function', () => {
    expectFunction(isNull)
  })

  function p(value) { expectTrue(isNull(value)) }
  function n(value) { expectFalse(isNull(value)) }

  it('should work', () => {
    n(void 0)
    p(null)
  })
})
