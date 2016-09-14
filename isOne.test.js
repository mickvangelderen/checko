/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isOne from './isOne'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isOne', () => {
  it('should export a function', () => {
    expectFunction(isOne)
  })

  function p(value) { expectTrue(isOne(value)) }
  function n(value) { expectFalse(isOne(value)) }

  it('should work', () => {
    p(1)
    n('1')
  })
})
