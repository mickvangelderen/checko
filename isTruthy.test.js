/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isTruthy from './isTruthy'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isTruthy', () => {
  it('should export a function', () => {
    expectFunction(isTruthy)
  })

  function p(value) { expectTrue(isTruthy(value)) }
  function n(value) { expectFalse(isTruthy(value)) }

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
