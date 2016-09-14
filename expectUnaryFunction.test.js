/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectUnaryFunction from './expectUnaryFunction'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectUnaryFunction', () => {
  it('should export a function', () => {
    expectFunction(expectUnaryFunction)
  })

  function p(value) { expectSame(expectUnaryFunction(value), value) }
  function n(value) { expectToThrow(expectUnaryFunction, null, [ value ]) }

  it('should work', () => {
    n(() => {})
    p(a => a)
    n((a, b) => b)
    n((a, b, c) => c)
  })
})
