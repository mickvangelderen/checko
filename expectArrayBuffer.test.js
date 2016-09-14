/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectArrayBuffer from './expectArrayBuffer'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectArrayBuffer', () => {
  it('should export a function', () => {
    expectFunction(expectArrayBuffer)
  })

  function p(value) { expectSame(expectArrayBuffer(value), value) }
  function n(value) { expectToThrow(expectArrayBuffer, null, [ value ]) }

  if (ArrayBuffer) {
    it('should work', () => {
      p(new ArrayBuffer(0))
      n({})
    })
  } else {
    it.skip('ArrayBuffer not available', () => {})
  }
})
