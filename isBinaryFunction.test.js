/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isBinaryFunction from './isBinaryFunction'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isBinaryFunction', () => {
  it('should export a function', () => {
    expectFunction(isBinaryFunction)
  })

  function p(value) { expectTrue(isBinaryFunction(value)) }
  function n(value) { expectFalse(isBinaryFunction(value)) }

  it('should work', () => {
    n(() => {})
    n(a => a)
    p((a, b) => b)
    n((a, b, c) => c)
  })
})
