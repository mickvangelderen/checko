/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectPositiveNumber from './expectPositiveNumber'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectPositiveNumber', () => {
  it('should export a function', () => {
    expectFunction(expectPositiveNumber)
  })

  function p(value) { expectSame(expectPositiveNumber(value), value) }
  function n(value) { expectToThrow(expectPositiveNumber, null, [ value ]) }

  it('should work', () => {
    n(-Infinity)
    n(-4.2)
    n(-1)
    n(-0)
    n(0)
    p(1)
    p(4.2)
    p(Infinity)
    n(NaN)
    n('1')
  })
})
