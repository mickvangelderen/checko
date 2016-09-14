/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isString from './isString'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isString', () => {
  it('should export a function', () => {
    expectFunction(isString)
  })

  function p(value) { expectTrue(isString(value)) }
  function n(value) { expectFalse(isString(value)) }

  it('should work', () => {
    p('')
    n(1)
  })
})
