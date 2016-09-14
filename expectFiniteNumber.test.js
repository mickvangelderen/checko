/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectFiniteNumber from './expectFiniteNumber'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectFiniteNumber', () => {
  it('should export a function', () => {
    expectFunction(expectFiniteNumber)
  })

  function p(value) { expectSame(expectFiniteNumber(value), value) }
  function n(value) { expectToThrow(expectFiniteNumber, null, [ value ]) }

  it('should work', () => {
    n(-Infinity)
    p(-4.2)
    p(-1)
    p(-0)
    p(0)
    p(1)
    p(4.2)
    n(Infinity)
    n(NaN)
    n('1')
  })
})
