/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isFunction from './isFunction'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isFunction', () => {
  it('should export a function', () => {
    expectFunction(isFunction)
  })

  function p(value) { expectTrue(isFunction(value)) }
  function n(value) { expectFalse(isFunction(value)) }

  it('should work', () => {
    p(function() {})
    n({})
  })
})
