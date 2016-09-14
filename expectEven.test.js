/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectEven from './expectEven'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectEven', () => {
  it('should export a function', () => {
    expectFunction(expectEven)
  })

  function p(value) { expectSame(expectEven(value), value) }
  function n(value) { expectToThrow(expectEven, null, [ value ]) }

  it('should work', () => {
    n(-Infinity)
    n(-4.2)
    n(-1)
    p(-0)
    p(0)
    n(1)
    n(4.2)
    n(Infinity)
    n(NaN)
    p('0')
  })
})
