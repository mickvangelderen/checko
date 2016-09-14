/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectBinaryFunction from './expectBinaryFunction'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectBinaryFunction', () => {
  it('should export a function', () => {
    expectFunction(expectBinaryFunction)
  })

  function p(value) { expectSame(expectBinaryFunction(value), value) }
  function n(value) { expectToThrow(expectBinaryFunction, null, [ value ]) }

  it('should work', () => {
    n(() => {})
    n(a => a)
    p((a, b) => b)
    n((a, b, c) => c)
  })
})
