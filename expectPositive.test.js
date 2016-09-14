/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectPositive from './expectPositive'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectPositive', () => {
  it('should export a function', () => {
    expectFunction(expectPositive)
  })

  function p(value) { expectSame(expectPositive(value), value) }
  function n(value) { expectToThrow(expectPositive, null, [ value ]) }

  it('should work', () => {
    n(-Infinity)
    n(-4.2)
    n(-1)
    n(-0)
    n(0)
    p(1)
    p(4.2)
    p(Infinity)
    n(NaN)
    p('1')
  })
})
