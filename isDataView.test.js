/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isDataView from './isDataView'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isDataView', () => {
  it('should export a function', () => {
    expectFunction(isDataView)
  })

  function p(value) { expectTrue(isDataView(value)) }
  function n(value) { expectFalse(isDataView(value)) }

  if (DataView) {
    it('should work', () => {
      p(new DataView(new ArrayBuffer(0)))
      n({})
    })
  } else {
    it.skip('DataView not available', () => {})
  }
})
