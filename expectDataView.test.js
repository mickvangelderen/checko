/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectDataView from './expectDataView'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectDataView', () => {
  it('should export a function', () => {
    expectFunction(expectDataView)
  })

  function p(value) { expectSame(expectDataView(value), value) }
  function n(value) { expectToThrow(expectDataView, null, [ value ]) }

  if (DataView) {
    it('should work', () => {
      p(new DataView(new ArrayBuffer(0)))
      n({})
    })
  } else {
    it.skip('DataView not available', () => {})
  }
})
