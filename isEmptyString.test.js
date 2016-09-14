/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isEmptyString from './isEmptyString'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isEmptyString', () => {
  it('should export a function', () => {
    expectFunction(isEmptyString)
  })

  function p(value) { expectTrue(isEmptyString(value)) }
  function n(value) { expectFalse(isEmptyString(value)) }

  it('should work', () => {
    p('')
    n('a')
  })
})
