/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectUndefined from './expectUndefined'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectUndefined', () => {
  it('should export a function', () => {
    expectFunction(expectUndefined)
  })

  function p(value) { expectSame(expectUndefined(value), value) }
  function n(value) { expectToThrow(expectUndefined, null, [ value ]) }

  it('should work', () => {
    p(void 0)
    n(null)
  })
})
