/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isObject from './isObject'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isObject', () => {
  it('should export a function', () => {
    expectFunction(isObject)
  })

  function p(value) { expectTrue(isObject(value)) }
  function n(value) { expectFalse(isObject(value)) }

  it('should work', () => {
    p({})
    n(null)
  })
})
