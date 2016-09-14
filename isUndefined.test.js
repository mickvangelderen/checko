/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isUndefined from './isUndefined'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isUndefined', () => {
  it('should export a function', () => {
    expectFunction(isUndefined)
  })

  function p(value) { expectTrue(isUndefined(value)) }
  function n(value) { expectFalse(isUndefined(value)) }

  it('should work', () => {
    p(void 0)
    n(null)
  })
})
