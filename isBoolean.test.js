/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isBoolean from './isBoolean'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isBoolean', () => {
  it('should export a function', () => {
    expectFunction(isBoolean)
  })

  function p(value) { expectTrue(isBoolean(value)) }
  function n(value) { expectFalse(isBoolean(value)) }

  it('should work', () => {
    p(true)
    p(false)
    n(0)
    n(new Boolean(true))
  })
})
