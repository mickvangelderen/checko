/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectZero from './expectZero'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectZero', () => {
  it('should export a function', () => {
    expectFunction(expectZero)
  })

  function p(value) { expectSame(expectZero(value), value) }
  function n(value) { expectToThrow(expectZero, null, [ value ]) }

  it('should work', () => {
    p(0)
    p(-0)
    n('0')
    n('-0')
  })
})
