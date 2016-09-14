/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectPositiveInfinity from './expectPositiveInfinity'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectPositiveInfinity', () => {
  it('should export a function', () => {
    expectFunction(expectPositiveInfinity)
  })

  function p(value) { expectSame(expectPositiveInfinity(value), value) }
  function n(value) { expectToThrow(expectPositiveInfinity, null, [ value ]) }

  it('should work', () => {
    p(Infinity)
    n(-Infinity)
    n(NaN)
  })
})
