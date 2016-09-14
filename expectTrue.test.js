/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectTrue from './expectTrue'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectTrue', () => {
  it('should export a function', () => {
    expectFunction(expectTrue)
  })

  function p(value) { expectSame(expectTrue(value), value) }
  function n(value) { expectToThrow(expectTrue, null, [ value ]) }

  it('should work', () => {
    n(false)
    p(true)
    n(1)
  })
})
