/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectNegativeZero from './expectNegativeZero'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectNegativeZero', () => {
  it('should export a function', () => {
    expectFunction(expectNegativeZero)
  })

  function p(value) { expectSame(expectNegativeZero(value), value) }
  function n(value) { expectToThrow(expectNegativeZero, null, [ value ]) }

  it('should work', () => {
    p(-0)
    n(0)
    n('-0')
  })
})
