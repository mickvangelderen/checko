/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectNonNegativeNumber from './expectNonNegativeNumber'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectNonNegativeNumber', () => {
  it('should export a function', () => {
    expectFunction(expectNonNegativeNumber)
  })

  function p(value) { expectSame(expectNonNegativeNumber(value), value) }
  function n(value) { expectToThrow(expectNonNegativeNumber, null, [ value ]) }

  it('should work', () => {
    n(-Infinity)
    n(-4.2)
    n(-1)
    p(-0)
    p(0)
    p(1)
    p(4.2)
    p(Infinity)
    n(NaN)
    n('0')
  })
})
