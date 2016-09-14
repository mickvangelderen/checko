/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isAtLeast from './isAtLeast'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isAtLeast', () => {
  it('should export a function', () => {
    expectFunction(isAtLeast)
  })

  function p(value, expected) { expectTrue(isAtLeast(value, expected)) }
  function n(value, expected) { expectFalse(isAtLeast(value, expected)) }

  it('should work', () => {
    p('a', 'a')
    n(1, 2)
  })
})
