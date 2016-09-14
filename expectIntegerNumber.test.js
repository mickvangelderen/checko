/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectIntegerNumber from './expectIntegerNumber'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectIntegerNumber', () => {
  it('should export a function', () => {
    expectFunction(expectIntegerNumber)
  })

  function p(value) { expectSame(expectIntegerNumber(value), value) }
  function n(value) { expectToThrow(expectIntegerNumber, null, [ value ]) }

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
    n('1')
  })
})
