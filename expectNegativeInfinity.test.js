/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectNegativeInfinity from './expectNegativeInfinity'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectNegativeInfinity', () => {
  it('should export a function', () => {
    expectFunction(expectNegativeInfinity)
  })

  function p(value) { expectSame(expectNegativeInfinity(value), value) }
  function n(value) { expectToThrow(expectNegativeInfinity, null, [ value ]) }

  it('should work', () => {
    p(-Infinity)
    n(Infinity)
    n(NaN)
  })
})
