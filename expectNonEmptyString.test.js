/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectNonEmptyString from './expectNonEmptyString'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectNonEmptyString', () => {
  it('should export a function', () => {
    expectFunction(expectNonEmptyString)
  })

  function p(value) { expectSame(expectNonEmptyString(value), value) }
  function n(value) { expectToThrow(expectNonEmptyString, null, [ value ]) }

  it('should work', () => {
    n('')
    p('a')
  })
})
