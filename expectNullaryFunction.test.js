/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectNullaryFunction from './expectNullaryFunction'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectNullaryFunction', () => {
  it('should export a function', () => {
    expectFunction(expectNullaryFunction)
  })

  function p(value) { expectSame(expectNullaryFunction(value), value) }
  function n(value) { expectToThrow(expectNullaryFunction, null, [ value ]) }

  it('should work', () => {
    p(() => {})
    n(a => a)
    n((a, b) => b)
    n((a, b, c) => c)
  })
})
