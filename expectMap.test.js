/*************************************************************************
 * This file has been automatically generated, do not edit this directly *
 *************************************************************************/

/* eslint-env mocha */

import expectMap from './expectMap'
import expectSame from './expectSame'
import expectFunction from './expectFunction'
import expectToThrow from './expectToThrow'

describe('expectMap', () => {
  it('should export a function', () => {
    expectFunction(expectMap)
  })

  function p(value) { expectSame(expectMap(value), value) }
  function n(value) { expectToThrow(expectMap, null, [ value ]) }

  if (Map) {
    it('should work', () => {
      p(new Map())
      n({})
    })
  } else {
    it.skip('Map not available', () => {})
  }
})
