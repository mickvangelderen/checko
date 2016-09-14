/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectAtMost from './expectAtMost'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectAtMost', () => {
  it('should export a function', () => {
    expectFunction(expectAtMost)
  })

  function p(value, expected) { expectSame(expectAtMost(value, expected), value) }
  function n(value, expected) { expectToThrow(expectAtMost, null, [ value, expected ]) }

  it('should work', () => {
    p('a', 'a')
    n(2, 1)
  })
})
