/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isNonEmptyString from './isNonEmptyString'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isNonEmptyString', () => {
  it('should export a function', () => {
    expectFunction(isNonEmptyString)
  })

  function p(value) { expectTrue(isNonEmptyString(value)) }
  function n(value) { expectFalse(isNonEmptyString(value)) }

  it('should work', () => {
    n('')
    p('a')
  })
})
