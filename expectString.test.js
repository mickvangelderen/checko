/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectString from './expectString'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectString', () => {
  it('should export a function', () => {
    expectFunction(expectString)
  })

  function p(value) { expectSame(expectString(value), value) }
  function n(value) { expectToThrow(expectString, null, [ value ]) }

  it('should work', () => {
    p('')
    n(1)
  })
})
