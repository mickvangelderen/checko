/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isError from './isError'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isError', () => {
  it('should export a function', () => {
    expectFunction(isError)
  })

  function p(value) { expectTrue(isError(value)) }
  function n(value) { expectFalse(isError(value)) }

  it('should work', () => {
    p(new Error())
    n({ message: '' })
  })
})
