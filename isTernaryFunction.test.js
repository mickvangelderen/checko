/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isTernaryFunction from './isTernaryFunction'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isTernaryFunction', () => {
  it('should export a function', () => {
    expectFunction(isTernaryFunction)
  })

  function p(value) { expectTrue(isTernaryFunction(value)) }
  function n(value) { expectFalse(isTernaryFunction(value)) }

  it('should work', () => {
    n(() => {})
    n(a => a)
    n((a, b) => b)
    p((a, b, c) => c)
  })
})
