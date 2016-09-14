/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectTernaryFunction from './expectTernaryFunction'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectTernaryFunction', () => {
  it('should export a function', () => {
    expectFunction(expectTernaryFunction)
  })

  function p(value) { expectSame(expectTernaryFunction(value), value) }
  function n(value) { expectToThrow(expectTernaryFunction, null, [ value ]) }

  it('should work', () => {
    n(() => {})
    n(a => a)
    n((a, b) => b)
    p((a, b, c) => c)
  })
})
