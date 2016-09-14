/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectFloat64Array from './expectFloat64Array'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectFloat64Array', () => {
  it('should export a function', () => {
    expectFunction(expectFloat64Array)
  })

  function p(value) { expectSame(expectFloat64Array(value), value) }
  function n(value) { expectToThrow(expectFloat64Array, null, [ value ]) }

  if (Float64Array) {
    it('should work', () => {
      p(new Float64Array(0))
      n({})
    })
  } else {
    it.skip('Float64Array not available', () => {})
  }
})
