/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isLessThan from './isLessThan'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isLessThan', () => {
  it('should export a function', () => {
    expectFunction(isLessThan)
  })

  function p(value, expected) { expectTrue(isLessThan(value, expected)) }
  function n(value, expected) { expectFalse(isLessThan(value, expected)) }

  it('should work', () => {
    p('a', 'b')
    n(1, 1)
  })
})
