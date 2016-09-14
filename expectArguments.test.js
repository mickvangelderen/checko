/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectArguments from './expectArguments'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectArguments', () => {
  it('should export a function', () => {
    expectFunction(expectArguments)
  })

  function p(value) { expectSame(expectArguments(value), value) }
  function n(value) { expectToThrow(expectArguments, null, [ value ]) }

  it('should work', () => {
    p(function() { return arguments }())
    n([])
  })
})
