/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectNonPositiveInteger from './expectNonPositiveInteger'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectNonPositiveInteger', () => {
  it('should export a function', () => {
    expectFunction(expectNonPositiveInteger)
  })

  function p(value) { expectSame(expectNonPositiveInteger(value), value) }
  function n(value) { expectToThrow(expectNonPositiveInteger, null, [ value ]) }

  it('should work', () => {
    n(-Infinity)
    n(-4.2)
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
