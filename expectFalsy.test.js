/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectFalsy from './expectFalsy'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectFalsy', () => {
  it('should export a function', () => {
    expectFunction(expectFalsy)
  })

  function p(value) { expectSame(expectFalsy(value), value) }
  function n(value) { expectToThrow(expectFalsy, null, [ value ]) }

  it('should work', () => {
    p(false)
    p(null)
    p(undefined)
    p(0)
    n(1)
    n(true)
    n(new Boolean(false))
  })
})
