/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectMoreThan from './expectMoreThan'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectMoreThan', () => {
  it('should export a function', () => {
    expectFunction(expectMoreThan)
  })

  function p(value, expected) { expectSame(expectMoreThan(value, expected), value) }
  function n(value, expected) { expectToThrow(expectMoreThan, null, [ value, expected ]) }

  it('should work', () => {
    p('b', 'a')
    n(1, 1)
  })
})
