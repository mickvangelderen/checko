/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isMoreThan from './isMoreThan'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isMoreThan', () => {
  it('should export a function', () => {
    expectFunction(isMoreThan)
  })

  function p(value, expected) { expectTrue(isMoreThan(value, expected)) }
  function n(value, expected) { expectFalse(isMoreThan(value, expected)) }

  it('should work', () => {
    p('b', 'a')
    n(1, 1)
  })
})
