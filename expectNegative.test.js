/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectNegative from './expectNegative'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectNegative', () => {
  it('should export a function', () => {
    expectFunction(expectNegative)
  })

  function p(value) { expectSame(expectNegative(value), value) }
  function n(value) { expectToThrow(expectNegative, null, [ value ]) }

  it('should work', () => {
    p(-Infinity)
    p(-4.2)
    p(-1)
    n(-0)
    n(0)
    n(1)
    n(4.2)
    n(Infinity)
    n(NaN)
    p('-1')
  })
})
