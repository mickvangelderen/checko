/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isTrue from './isTrue'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isTrue', () => {
  it('should export a function', () => {
    expectFunction(isTrue)
  })

  function p(value) { expectTrue(isTrue(value)) }
  function n(value) { expectFalse(isTrue(value)) }

  it('should work', () => {
    n(false)
    p(true)
    n(1)
  })
})
