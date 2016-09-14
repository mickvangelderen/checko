/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isFalse from './isFalse'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isFalse', () => {
  it('should export a function', () => {
    expectFunction(isFalse)
  })

  function p(value) { expectTrue(isFalse(value)) }
  function n(value) { expectFalse(isFalse(value)) }

  it('should work', () => {
    p(false)
    n(true)
    n(0)
  })
})
