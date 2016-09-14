/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import isMap from './isMap'
import expectFalse from './expectFalse'
import expectFunction from './expectFunction'
import expectTrue from './expectTrue'

describe('isMap', () => {
  it('should export a function', () => {
    expectFunction(isMap)
  })

  function p(value) { expectTrue(isMap(value)) }
  function n(value) { expectFalse(isMap(value)) }

  if (Map) {
    it('should work', () => {
      p(new Map())
      n({})
    })
  } else {
    it.skip('Map not available', () => {})
  }
})
