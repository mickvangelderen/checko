/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectNumber from './expectNumber'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectNumber', () => {
  it('should export a function', () => {
    expectFunction(expectNumber)
  })

  function p(value) { expectSame(expectNumber(value), value) }
  function n(value) { expectToThrow(expectNumber, null, [ value ]) }

  it('should work', () => {
    p(-Infinity)
    p(-4.2)
    p(-1)
    p(-0)
    p(0)
    p(1)
    p(4.2)
    p(Infinity)
    n(NaN)
    n('1')
  })
})
