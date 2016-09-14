/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isArray from './isArray'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isArray', () => {
  it('should export a function', () => {
    expectFunction(isArray)
  })

  function p(value) { expectTrue(isArray(value)) }
  function n(value) { expectFalse(isArray(value)) }

  it('should work', () => {
    p([])
    n({ length: 0 })
  })
})
