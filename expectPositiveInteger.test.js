/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectPositiveInteger from './expectPositiveInteger'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectPositiveInteger', () => {
  it('should export a function', () => {
    expectFunction(expectPositiveInteger)
  })

  function p(value) { expectSame(expectPositiveInteger(value), value) }
  function n(value) { expectToThrow(expectPositiveInteger, null, [ value ]) }

  it('should work', () => {
    n(-Infinity)
    n(-4.2)
    n(-1)
    n(-0)
    n(0)
    p(1)
    n(4.2)
    n(Infinity)
    n(NaN)
    n('1')
  })
})
