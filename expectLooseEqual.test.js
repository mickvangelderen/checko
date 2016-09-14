/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectLooseEqual from './expectLooseEqual'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectLooseEqual', () => {
  it('should export a function', () => {
    expectFunction(expectLooseEqual)
  })

  function p(value, expected) { expectSame(expectLooseEqual(value, expected), value) }
  function n(value, expected) { expectToThrow(expectLooseEqual, null, [ value, expected ]) }

  it('should work', () => {
    p(1, '1')
    n(1, 2)
  })
})
