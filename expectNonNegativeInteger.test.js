/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectNonNegativeInteger from './expectNonNegativeInteger'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectNonNegativeInteger', () => {
  it('should export a function', () => {
    expectFunction(expectNonNegativeInteger)
  })

  function p(value) { expectSame(expectNonNegativeInteger(value), value) }
  function n(value) { expectToThrow(expectNonNegativeInteger, null, [ value ]) }

  it('should work', () => {
    n(-Infinity)
    n(-4.2)
    n(-1)
    p(-0)
    p(0)
    p(1)
    n(4.2)
    n(Infinity)
    n(NaN)
    n('0')
  })
})
