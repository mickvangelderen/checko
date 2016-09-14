/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectNull from './expectNull'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectNull', () => {
  it('should export a function', () => {
    expectFunction(expectNull)
  })

  function p(value) { expectSame(expectNull(value), value) }
  function n(value) { expectToThrow(expectNull, null, [ value ]) }

  it('should work', () => {
    n(void 0)
    p(null)
  })
})
