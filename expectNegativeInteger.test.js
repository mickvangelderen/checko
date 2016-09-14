/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectNegativeInteger from './expectNegativeInteger'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectNegativeInteger', () => {
  it('should export a function', () => {
    expectFunction(expectNegativeInteger)
  })

  function p(value) { expectSame(expectNegativeInteger(value), value) }
  function n(value) { expectToThrow(expectNegativeInteger, null, [ value ]) }

  it('should work', () => {
    n(-Infinity)
    n(-4.2)
    p(-1)
    n(-0)
    n(0)
    n(1)
    n(4.2)
    n(Infinity)
    n(NaN)
    n('-1')
  })
})
