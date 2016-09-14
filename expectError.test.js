/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectError from './expectError'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectError', () => {
  it('should export a function', () => {
    expectFunction(expectError)
  })

  function p(value) { expectSame(expectError(value), value) }
  function n(value) { expectToThrow(expectError, null, [ value ]) }

  it('should work', () => {
    p(new Error())
    n({ message: '' })
  })
})
