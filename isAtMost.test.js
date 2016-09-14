/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isAtMost from './isAtMost'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isAtMost', () => {
  it('should export a function', () => {
    expectFunction(isAtMost)
  })

  function p(value, expected) { expectTrue(isAtMost(value, expected)) }
  function n(value, expected) { expectFalse(isAtMost(value, expected)) }

  it('should work', () => {
    p('a', 'a')
    n(2, 1)
  })
})
