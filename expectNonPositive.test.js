/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectNonPositive from './expectNonPositive'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectNonPositive', () => {
  it('should export a function', () => {
    expectFunction(expectNonPositive)
  })

  function p(value) { expectSame(expectNonPositive(value), value) }
  function n(value) { expectToThrow(expectNonPositive, null, [ value ]) }

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
    p('-0')
  })
})
