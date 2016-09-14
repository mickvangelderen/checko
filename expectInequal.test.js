/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectInequal from './expectInequal'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectInequal', () => {
  it('should export a function', () => {
    expectFunction(expectInequal)
  })

  function p(value, expected) { expectSame(expectInequal(value, expected), value) }
  function n(value, expected) { expectToThrow(expectInequal, null, [ value, expected ]) }

  it('should work', () => {
    n(1, 1)
    p(1, '1')
  })
})
