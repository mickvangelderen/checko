/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectFalse from './expectFalse'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectFalse', () => {
  it('should export a function', () => {
    expectFunction(expectFalse)
  })

  function p(value) { expectSame(expectFalse(value), value) }
  function n(value) { expectToThrow(expectFalse, null, [ value ]) }

  it('should work', () => {
    p(false)
    n(true)
    n(0)
  })
})
