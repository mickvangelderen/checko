/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectEvenInteger from './expectEvenInteger'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectEvenInteger', () => {
  it('should export a function', () => {
    expectFunction(expectEvenInteger)
  })

  function p(value) { expectSame(expectEvenInteger(value), value) }
  function n(value) { expectToThrow(expectEvenInteger, null, [ value ]) }

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
    n('0')
  })
})
