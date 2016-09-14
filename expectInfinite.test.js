/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectInfinite from './expectInfinite'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectInfinite', () => {
  it('should export a function', () => {
    expectFunction(expectInfinite)
  })

  function p(value) { expectSame(expectInfinite(value), value) }
  function n(value) { expectToThrow(expectInfinite, null, [ value ]) }

  it('should work', () => {
    p(-Infinity)
    n(-4.2)
    n(-1)
    n(-0)
    n(0)
    n(1)
    n(4.2)
    p(Infinity)
    n(NaN)
    n('1')
  })
})
