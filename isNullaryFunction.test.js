/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isNullaryFunction from './isNullaryFunction'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isNullaryFunction', () => {
  it('should export a function', () => {
    expectFunction(isNullaryFunction)
  })

  function p(value) { expectTrue(isNullaryFunction(value)) }
  function n(value) { expectFalse(isNullaryFunction(value)) }

  it('should work', () => {
    p(() => {})
    n(a => a)
    n((a, b) => b)
    n((a, b, c) => c)
  })
})
