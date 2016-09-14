/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectEqual from './expectEqual'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectEqual', () => {
  it('should export a function', () => {
    expectFunction(expectEqual)
  })

  function p(value, expected) { expectSame(expectEqual(value, expected), value) }
  function n(value, expected) { expectToThrow(expectEqual, null, [ value, expected ]) }

  it('should work', () => {
    p(1, 1)
    n(1, '1')
  })
})
