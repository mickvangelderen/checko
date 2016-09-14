/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectTruthy from './expectTruthy'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectTruthy', () => {
  it('should export a function', () => {
    expectFunction(expectTruthy)
  })

  function p(value) { expectSame(expectTruthy(value), value) }
  function n(value) { expectToThrow(expectTruthy, null, [ value ]) }

  it('should work', () => {
    n(false)
    n(null)
    n(undefined)
    n(0)
    p(1)
    p(true)
    p(new Boolean(false))
  })
})
