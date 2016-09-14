/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectNegativeNumber from './expectNegativeNumber'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectNegativeNumber', () => {
  it('should export a function', () => {
    expectFunction(expectNegativeNumber)
  })

  function p(value) { expectSame(expectNegativeNumber(value), value) }
  function n(value) { expectToThrow(expectNegativeNumber, null, [ value ]) }

  it('should work', () => {
    p(-Infinity)
    p(-4.2)
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
