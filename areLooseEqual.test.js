/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import areLooseEqual from './areLooseEqual'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('areLooseEqual', () => {
  it('should export a function', () => {
    expectFunction(areLooseEqual)
  })

  function p(value, expected) { expectTrue(areLooseEqual(value, expected)) }
  function n(value, expected) { expectFalse(areLooseEqual(value, expected)) }

  it('should work', () => {
    p(1, '1')
    n(1, 2)
  })
})
