/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import areEqual from './areEqual'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('areEqual', () => {
  it('should export a function', () => {
    expectFunction(areEqual)
  })

  function p(value, expected) { expectTrue(areEqual(value, expected)) }
  function n(value, expected) { expectFalse(areEqual(value, expected)) }

  it('should work', () => {
    p(1, 1)
    n(1, '1')
  })
})
