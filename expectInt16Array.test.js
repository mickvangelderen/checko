/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectInt16Array from './expectInt16Array'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectInt16Array', () => {
  it('should export a function', () => {
    expectFunction(expectInt16Array)
  })

  function p(value) { expectSame(expectInt16Array(value), value) }
  function n(value) { expectToThrow(expectInt16Array, null, [ value ]) }

  if (Int16Array) {
    it('should work', () => {
      p(new Int16Array(0))
      n({})
    })
  } else {
    it.skip('Int16Array not available', () => {})
  }
})
