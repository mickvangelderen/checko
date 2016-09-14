/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isArguments from './isArguments'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isArguments', () => {
  it('should export a function', () => {
    expectFunction(isArguments)
  })

  function p(value) { expectTrue(isArguments(value)) }
  function n(value) { expectFalse(isArguments(value)) }

  it('should work', () => {
    p(function() { return arguments }())
    n([])
  })
})
