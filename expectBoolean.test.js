/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectBoolean from './expectBoolean'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectBoolean', () => {
  it('should export a function', () => {
    expectFunction(expectBoolean)
  })

  function p(value) { expectSame(expectBoolean(value), value) }
  function n(value) { expectToThrow(expectBoolean, null, [ value ]) }

  it('should work', () => {
    p(true)
    p(false)
    n(0)
    n(new Boolean(true))
  })
})
