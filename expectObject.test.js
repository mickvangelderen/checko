/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectObject from './expectObject'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectObject', () => {
  it('should export a function', () => {
    expectFunction(expectObject)
  })

  function p(value) { expectSame(expectObject(value), value) }
  function n(value) { expectToThrow(expectObject, null, [ value ]) }

  it('should work', () => {
    p({})
    n(null)
  })
})
