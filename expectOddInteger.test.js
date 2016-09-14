/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectOddInteger from './expectOddInteger'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectOddInteger', () => {
  it('should export a function', () => {
    expectFunction(expectOddInteger)
  })

  function p(value) { expectSame(expectOddInteger(value), value) }
  function n(value) { expectToThrow(expectOddInteger, null, [ value ]) }

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
    n('1')
  })
})
