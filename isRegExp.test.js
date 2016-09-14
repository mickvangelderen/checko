/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isRegExp from './isRegExp'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isRegExp', () => {
  it('should export a function', () => {
    expectFunction(isRegExp)
  })

  function p(value) { expectTrue(isRegExp(value)) }
  function n(value) { expectFalse(isRegExp(value)) }

  it('should work', () => {
    p(new RegExp())
    n({})
  })
})
