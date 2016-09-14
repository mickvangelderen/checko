/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectOdd from './expectOdd'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectOdd', () => {
  it('should export a function', () => {
    expectFunction(expectOdd)
  })

  function p(value) { expectSame(expectOdd(value), value) }
  function n(value) { expectToThrow(expectOdd, null, [ value ]) }

  it('should work', () => {
    n(-Infinity)
    n(-4.2)
    p(-1)
    n(-0)
    n(0)
    p(1)
    n(4.2)
    n(Infinity)
    n(NaN)
    p('1')
  })
})
