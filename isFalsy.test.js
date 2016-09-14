/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isFalsy from './isFalsy'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isFalsy', () => {
  it('should export a function', () => {
    expectFunction(isFalsy)
  })

  function p(value) { expectTrue(isFalsy(value)) }
  function n(value) { expectFalse(isFalsy(value)) }

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
