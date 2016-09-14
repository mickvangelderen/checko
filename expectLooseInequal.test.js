/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectLooseInequal from './expectLooseInequal'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectLooseInequal', () => {
  it('should export a function', () => {
    expectFunction(expectLooseInequal)
  })

  function p(value, expected) { expectSame(expectLooseInequal(value, expected), value) }
  function n(value, expected) { expectToThrow(expectLooseInequal, null, [ value, expected ]) }

  it('should work', () => {
    n(1, '1')
    p(1, 2)
  })
})
