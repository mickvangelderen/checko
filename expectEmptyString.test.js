/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectEmptyString from './expectEmptyString'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectEmptyString', () => {
  it('should export a function', () => {
    expectFunction(expectEmptyString)
  })

  function p(value) { expectSame(expectEmptyString(value), value) }
  function n(value) { expectToThrow(expectEmptyString, null, [ value ]) }

  it('should work', () => {
    p('')
    n('a')
  })
})
