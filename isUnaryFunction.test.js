/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isUnaryFunction from './isUnaryFunction'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isUnaryFunction', () => {
  it('should export a function', () => {
    expectFunction(isUnaryFunction)
  })

  function p(value) { expectTrue(isUnaryFunction(value)) }
  function n(value) { expectFalse(isUnaryFunction(value)) }

  it('should work', () => {
    n(() => {})
    p(a => a)
    n((a, b) => b)
    n((a, b, c) => c)
  })
})
