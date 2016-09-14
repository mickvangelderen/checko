/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectNonPositiveNumber from './expectNonPositiveNumber'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectNonPositiveNumber', () => {
  it('should export a function', () => {
    expectFunction(expectNonPositiveNumber)
  })

  function p(value) { expectSame(expectNonPositiveNumber(value), value) }
  function n(value) { expectToThrow(expectNonPositiveNumber, null, [ value ]) }

  it('should work', () => {
    p(-Infinity)
    p(-4.2)
    p(-1)
    p(-0)
    p(0)
    n(1)
    n(4.2)
    n(Infinity)
    n(NaN)
    n('-0')
  })
})
