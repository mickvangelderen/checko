/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectNonNegative from './expectNonNegative'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectNonNegative', () => {
  it('should export a function', () => {
    expectFunction(expectNonNegative)
  })

  function p(value) { expectSame(expectNonNegative(value), value) }
  function n(value) { expectToThrow(expectNonNegative, null, [ value ]) }

  it('should work', () => {
    n(-Infinity)
    n(-4.2)
    n(-1)
    p(-0)
    p(0)
    p(1)
    p(4.2)
    p(Infinity)
    n(NaN)
    p('0')
  })
})
