/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectArray from './expectArray'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectArray', () => {
  it('should export a function', () => {
    expectFunction(expectArray)
  })

  function p(value) { expectSame(expectArray(value), value) }
  function n(value) { expectToThrow(expectArray, null, [ value ]) }

  it('should work', () => {
    p([])
    n({ length: 0 })
  })
})
