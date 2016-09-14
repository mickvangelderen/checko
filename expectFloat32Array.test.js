/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectFloat32Array from './expectFloat32Array'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectFloat32Array', () => {
  it('should export a function', () => {
    expectFunction(expectFloat32Array)
  })

  function p(value) { expectSame(expectFloat32Array(value), value) }
  function n(value) { expectToThrow(expectFloat32Array, null, [ value ]) }

  if (Float32Array) {
    it('should work', () => {
      p(new Float32Array(0))
      n({})
    })
  } else {
    it.skip('Float32Array not available', () => {})
  }
})
