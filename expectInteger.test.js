/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectInteger from './expectInteger'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectInteger', () => {
  it('should export a function', () => {
    expectFunction(expectInteger)
  })

  function p(value) { expectSame(expectInteger(value), value) }
  function n(value) { expectToThrow(expectInteger, null, [ value ]) }

  it('should work', () => {
    n(-Infinity)
    n(-4.2)
    p(-1)
    p(-0)
    p(0)
    p(1)
    n(4.2)
    n(Infinity)
    n(NaN)
    p('1')
  })
})
