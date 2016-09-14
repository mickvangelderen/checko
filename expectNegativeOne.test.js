/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectNegativeOne from './expectNegativeOne'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectNegativeOne', () => {
  it('should export a function', () => {
    expectFunction(expectNegativeOne)
  })

  function p(value) { expectSame(expectNegativeOne(value), value) }
  function n(value) { expectToThrow(expectNegativeOne, null, [ value ]) }

  it('should work', () => {
    p(-1)
    n('-1')
  })
})
