/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectAtLeast from './expectAtLeast'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectAtLeast', () => {
  it('should export a function', () => {
    expectFunction(expectAtLeast)
  })

  function p(value, expected) { expectSame(expectAtLeast(value, expected), value) }
  function n(value, expected) { expectToThrow(expectAtLeast, null, [ value, expected ]) }

  it('should work', () => {
    p('a', 'a')
    n(1, 2)
  })
})
