/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectLessThan from './expectLessThan'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectLessThan', () => {
  it('should export a function', () => {
    expectFunction(expectLessThan)
  })

  function p(value, expected) { expectSame(expectLessThan(value, expected), value) }
  function n(value, expected) { expectToThrow(expectLessThan, null, [ value, expected ]) }

  it('should work', () => {
    p('a', 'b')
    n(1, 1)
  })
})
